/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: dataFormat.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/6 19:21:55
  -----
  Mtime: 2023/5/14 15:13:17
  WordCount: 226
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====
  some data formatter 
*/

const tempData3 = [
  "{'001',{111:123,113:321,134:654,135:456,136:1554,101:56800,109:0,115:0}}",
  "{'006',{111:113,113:3211,134:154,135:156,136:154,101:5800,109:10,115:1000}}",
];

// [{ mname: '001', 111:123,113:321,134:654,135:456,136:1554,101:56800,109:0,115:0},{mname: '006', 111:113,113:3211,134:154,135:156,136:154,101:5800,109:10,115:1000}]

// I have string "{111:123,113:321,134:654,135:456,136:1554,101:56800,109:0,115:0}", but I need string to object ,please use JavaScript

const formattedData3 = tempData3.map((item) => {
  // 把第一个逗号前面的数据提出来
  // item.replace("{'","{mname:'");
  // console.log(item.replace("{'", "{mname:'"));

  console.log("正则匹配名字:", item.match(/{\S*,{/g)[0].slice(1, -2));
  // 先找到 ,{....}}，而后，切除首尾各一字符，留下 {....},方便转为JSON
  console.log("正则匹配{...}:", item.match(/,{\S*}}/g)[0].slice(1, -1));

  // let str = item.match(/,{\S*}}/g)[0].slice(1, -1);
  // console.log("字符串转Object:", eval("(" + str + ")"));

  return {
    mname: item.match(/{\S*,{/g)[0].slice(1, -2),
    ...eval("(" + item.match(/,{\S*}}/g)[0].slice(1, -1) + ")"),
  };
});

console.log("最终处理的数据:", formattedData3);

const tempData = [
  { fee: "NO", id: 1, feeCol: "5,1", seq: 1 },
  { fee: "客户名", id: 3, feeCol: "5,1", seq: 2 },
  { fee: "基本单价", id: 3, feeCol: "2,3", seq: 3 },
  { fee: "防水", id: 5, feeCol: "5,1", seq: 4 },
  { fee: "Pin数", id: 6, feeCol: "1,3", seq: 3 },
  { fee: "1P 以上", id: 7, feeCol: "1,1", seq: 3 },
];
/**
 * 格式化为:
 * [{prop:'id_1',text:'NO',rowspan:5,colspan:1},{prop:'id_3',text:'客户名',rowspan:5,colspan:1},{prop:'id_3',text:'基本单价',rowspan:2,colspan:3},{prop:'id_5',text:'防水',rowspan:5,colspan:1},{prop:'id_6',text:'Pin数',rowspan:1,colspan:3},{prop:'id_7',text:'1P以上',rowspan:1,colspan:1}]
 */
const formattedData = tempData.map((item) => {
  const [rowspan, colspan] = item.feeCol.split(",").map(Number);
  return {
    prop: `id_${item.id}`,
    text: item.fee,
    rowspan,
    colspan,
  };
});

console.log(formattedData);

// Example data
const data = [
  { fee: "any value", id: 1, op: "value" },
  { fee: "anvalue", id: 2, op: "vlue" },
];

function transformData(data) {
  const transformedData = [];

  for (const item of data) {
    const transformedItem = [];

    for (const key in item) {
      const value = item[key];
      transformedItem.push({ prop: key, text: value });
    }

    transformedData.push(transformedItem);
  }

  return transformedData;
}
const transformedData = transformData(data);
console.log(transformedData);

class StateManager {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener(this.state));
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // Return an unsubscribe function
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

// Usage
const stateManager = new StateManager({ count: 0 });

// Subscribe to state changes
const unsubscribe = stateManager.subscribe((state) => {
  console.log("State changed:", state);
});

// Update state
stateManager.setState({ count: stateManager.getState().count + 1 });

// Unsubscribe from state changes
unsubscribe();

/**
 * 根据传入目标，将获取到的数据重新排序
 * @param {Array} target 排序参考目标(通常为表头)
 * @param {Object} data 数组对象格式的数据(通常为后端返回数据)
 * @returns 重排的数据
 * @description 使用Object.keys()提取作为target可能有次第混乱的风险
 * @example SortingDataByArrayTarget(['',''],[{},{}])
 */
const SortingDataByArrayTarget = (target, data) => {
  return data.map((row) => {
    /** 用于存储单条数据 */
    const sortedRow = {};
    target.forEach((column) => {
      if (row.hasOwnProperty(column)) sortedRow[column] = row[column];
    });
    Object.keys(row).forEach((property) => {
      if (!target.includes(property)) sortedRow[property] = row[property];
    });
    return sortedRow;
  });
};

// form表单配置项生成

// 对象转数组

// 数组转对象

// EXCEL to JSON Converter

/**
 * 对象转数组
 * @param {Object} data 对象{ age: "13", name: "Monk" }
 * @returns [['age', '13']['name', 'Monk']]
 */
const ObjectToArray = (data) => Object.entries(data);

/**
 *
 * @param {Array} data 数组 [['age', '13']['name', 'Monk']]
 * @returns 返回 { age: "13", name: "Monk" }
 */
const ArrayToObject = (data) => Object.fromEntries(data);

// 数据
const TEST_1 = [
  { age: "13", name: "Monk" },
  { age: "15", name: "Lokavit" },
  { age: "17", name: "Satya" },
];

const TEST_2 = [
  { age: "13", name: "Monk" },
  { no: "13.15", name: "Lokavit" },
  { hp: "15.17", value: "Satya" },
];

const ArrayObjectToObject = (data) => {
  console.log("data:", data);
  let _newObj = {};
  data.forEach((item) => {
    // _newObj[ObjectToArray(item)[0][1]] = ObjectToArray(item)[1][1];
    const key = Object.values(item).filter((value) => !isNaN(value))[0];
    const keyValue = Object.values(item).filter((value) => isNaN(value))[0];
    _newObj[key] = keyValue;
  });
  console.log("_newObj:", _newObj);
  return _newObj;
};

ArrayObjectToObject(TEST_1);

// function toArrayToObject(array) {
//   const resultObject = {};

//   array.forEach((element) => {
//     resultObject[element.age] = element.name;
//   });

//   return resultObject;
// }

// const outputObject = toArrayToObject(TEST_1);
// console.log(outputObject);

// function toArrayToObject(array) {
//   const resultObject = {};

//   array.forEach((element) => {
//     const key = Object.values(element).filter((value) => !isNaN(value))[0];
//     const keyValue = Object.values(element).filter((value) => isNaN(value))[0];
//     resultObject[key] = keyValue;
//   });

//   return resultObject;
// }

// const outputObject = toArrayToObject(TEST_2);
// console.log(outputObject);

function toArrayToObject(array) {
  const resultObject = {};

  array.forEach((element) => {
    let key, keyValue;

    Object.entries(element).forEach(([property, value]) => {
      if (typeof value === "string" && !isNaN(Number(value))) {
        key = value;
      } else if (typeof value === "string") {
        keyValue = value;
      }
    });

    resultObject[key] = keyValue;
  });

  return resultObject;
}

const outputObject = toArrayToObject(TEST_2);
console.log(outputObject);

class LabelComponent {
  constructor() {
    console.log("LabelComponent!", this);
  }
  createLabel(name, val) {
    let _label = document.createElement("label");
    _label.setAttribute("for", name);
    _label.textContent = val;
    return _label;
  }
}

/**
 * 表单配置项
 */
const CONFIG_FORM = [
  {
    prop: "name",
    component: "input",
    type: "text",
    title: "名字" /** 给label作为显示用 */,
    defaultValue: "Monk",
  },
  {
    prop: "wish",
    component: "select",
    options: [
      { key: "html", value: "HTML" },
      { key: "CSS", value: "CSS" },
      { key: "js", value: "JS" },
    ],
    title: "擅长技能",
    defaultValue: "JS",
  },
  {
    prop: "wish",
    component: "select",
    options: [
      { key: "html", value: "HTML" },
      { key: "CSS", value: "CSS" },
      { key: "js", value: "JS" },
    ],
    title: "擅长技能",
    defaultValue: "HTML",
  },
  {
    prop: "name",
    component: "input",
    type: "text",
    title: "名字" /** 给label作为显示用 */,
    defaultValue: "Lokavit",
  },
];

class FormCpmponent {
  constructor(prop) {
    console.log("FormCpmponent!", prop);
    this._prop = Object.assign(prop, { config: CONFIG_FORM });
    this.init();
  }
  init() {
    this._prop.config.map((item) =>
      this._prop.el.appendChild(this.createFormItem(item))
    );
  }
  createFormItem(data) {
    console.log("表单中的每项:", data);
    let _div = document.createElement("div");
    _div.appendChild(new LabelComponent().createLabel(data.prop, data.title));
    if (data.component == "input") {
      _div.appendChild(
        new InputComponent().createInput(data, data.defaultValue)
      );
    }
    if (data.component == "select") {
      _div.appendChild(
        new SelectComponent().createSelect(data, data.defaultValue)
      );
    }
    return _div;
  }
}

// new FormCpmponent(CONFIG_FORM);
