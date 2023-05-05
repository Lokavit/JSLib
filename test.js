/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: test.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/5 19:02:26
  -----
  Mtime: 2023/5/5 22:56:53
  WordCount: 124
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

/** 后端的数据 */
const data = [
  {
    name: "Monk",
    id: 1,
    email: "monk@135.com",
    age: 13,
    status: 1,
    wish: "HTML",
  },
  {
    name: "Lokavit",
    id: 2,
    email: "lokavit@179.com",
    age: 15,
    status: 0,
    wish: "CSS",
  },
  {
    name: "Satya",
    id: 3,
    age: 17,
    email: "satya@153.com",
    status: 1,
    wish: "JS",
  },
];

/** 我的数据 */
const theadData = {
  id: "No.",
  name: "Name",
  age: "Age",
  email: "Email",
  wish: "Wish",
  status: "Status",
};

/** 加一个重排规则　Object.keys()有风险。 */
const theadSort = ["id", "name", "age", "email", "wish", "status"];

let newData = data.map((item) => customSort(theadSort, item));
console.log("重排的数据：", newData);
/**
 * 自定义排序。
 * @param {Array} target　排序数据参照
 * @param {Object} source 未排序的数据
 * @returns 排序完成的数据
 */
function customSort(target, source) {
  let _obj = Object.create(null); // new obj
  target.map((item) => {
    for (const [key, value] of Object.entries(source)) {
      if (key == item) _obj[key] = value;
    }
  });
  console.log("_obj:", _obj);
  return _obj;
}

const TableConfig = [
  { prop: "id" },
  {
    prop: "name",
    component: "input",
    type: "text",
  },
  {
    prop: "age",
    component: "input",
    type: "number",
  },
  {
    prop: "email",
    component: "input",
    type: "text",
  },
  {
    prop: "wish",
    component: "select",
    options: [
      { key: "html", value: "HTML" },
      { key: "CSS", value: "CSS" },
      { key: "js", value: "JS" },
    ],
  },
  {
    prop: "status",
    component: "input",
    type: "checkbox",
  },
];

/** 数据合并 */
let tableData = Object.create(null);
tableData.thead = theadData;
tableData.config = TableConfig;
tableData.data = newData;
tableData.el = document.querySelector("#testTable");

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
      value
        ? _select.options.add(new Option(value, item.key, false, true))
        : _select.options.add(new Option(item.value, item.key));
    });
    return _select;
  }
}

const ComponentInput = new InputComponent();
const ComponentSelect = new SelectComponent();

class TableComponent {
  constructor(data) {
    console.log("data:", data);
    this._data = data;
    this._data.el.insertAdjacentElement(
      "beforeend",
      this.createThead(this._data.thead)
    );
    this._data.el.insertAdjacentElement(
      "beforeend",
      this.createTbody(this._data)
    );
  }

  createThead(data) {
    console.log("createThead:", data);
    let _thead = document.createElement("thead");
    _thead.insertAdjacentElement("beforeend", this.createRow(data));
    return _thead;
  }
  createTbody(data) {
    console.log("createTbody data:", data.data);
    console.log("createTbody config:", data.config);
    console.log("createTbody el:", data.el);
    let _tbody = document.createElement("tbody");
    data.data.map((item) => {
      _tbody.insertAdjacentElement(
        "beforeend",
        this.createRow({ data: item, config: data.config })
      );
    });

    return _tbody;
  }

  /**
   *
   * @param {*} data
   * @returns
   */
  createRow(data) {
    console.log("createRow data:", data);
    let _tr = document.createElement("tr");
    /**
     * 没有config的情况下，默认是表头
     */
    if (!data.config) {
      console.log("createRow data Th:", data.config);
      for (const [key, value] of Object.entries(data)) {
        _tr.appendChild(this.createCellTh(key, value));
      }
    } else {
      /**
       * 非表头，默认是表体
       */
      console.log("createRow config:", data.config);
      for (const [key, value] of Object.entries(data.data)) {
        console.log("属性和值:", key, value);
        // 拿着key去config里寻找对应的prop
        let _temp = data.config.filter((item) => item.prop == key);
        console.log("prop ==key:", _temp);
        /** 非带有子组件　＆＆　非　编号列 */
        if (!_temp[0].component && _temp[0].prop !== "id") {
          _tr.appendChild(this.createCellTd(value));
        }
        if (_temp[0].prop == "id") {
          _tr.appendChild(this.createCellTh(key, value));
        }
        // 如果是　input组件
        if (_temp[0].component == "input") {
          /** 把数据中的value也传到子组件中 */
          _tr.appendChild(
            this.createCellTd(ComponentInput.createInput(_temp[0], value))
          );
        }
        if (_temp[0].component == "select") {
          console.log("createSelect", _temp[0], value);
          _tr.appendChild(
            this.createCellTd(ComponentSelect.createSelect(_temp[0], value))
          );
        }
      }
    }
    return _tr;
  }
  /**
   * <td>
   * @param {*} data
   */
  createCellTd(childEl) {
    console.log("createCellTd:", childEl);
    let _td = document.createElement("td");
    console.log("childEl:", typeof childEl);
    if (typeof childEl != "object") {
      _td.textContent = childEl;
    } else {
      _td.appendChild(childEl);
    }
    return _td;
  }
  /**
   * <th>
   * @param {*} data
   */
  createCellTh(prop, value) {
    console.log("createCellTh:", prop, value);
    let _th = document.createElement("th");
    _th.dataset.id = prop;
    _th.textContent = value;
    return _th;
  }
}

let ComponentTable = new TableComponent(tableData);
