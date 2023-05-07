/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: dataFormat.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/6 19:21:55
  -----
  Mtime: 2023/5/7 13:53:40
  WordCount: 141
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====
  some data formatter 
*/

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

class InputComponent {
  constructor() {
    console.log("InputComponent:", this);
  }
  createInput(data, value) {
    console.log("input data:", data);
    console.log("input value:", value);
    let _input = document.createElement("input");
    _input.setAttribute("type", data.type);
    _input.setAttribute("name:", data.prop);
    _input.setAttribute("id:", data.prop);
    _input.setAttribute("value", value || "");
    if (data.type == "checkbox") {
      _input.checked = value == 1 ? "checked" : "";
    }
    return _input;
  }
}

class SelectComponent {
  constructor() {
    console.log("SelectComponent:", this);
  }
  createSelect(data, value) {
    console.log("createSelect data:", data);
    let _select = document.createElement("select");
    if (!data.options) return;
    data.options.map((item) => {
      console.log("item?", item);
      item.value == value
        ? _select.options.add(new Option(value, item.key, false, true))
        : _select.options.add(new Option(item.value, item.key));
    });
    return _select;
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
