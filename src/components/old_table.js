/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: table.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 14:11:55
  -----
  Mtime: 2023/5/21 16:41:11
  WordCount: 235
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====
    Table component 
    need:
    1. t
*/
/**
 * 整理配置项：表头
 * 可能是多行表头，所以使用数组嵌套形式，最深层的实际值使用对象
 * 每个[]视为一行的配置项
 * @description 动态配置项：
 * @param rowspan: 所占行
 * @param colspan: 所占列
 * @param key: 字段名，也是列名，与tbody数据对应
 * @param text: 明文
 * @example const CONFIG_THEAD = [[], [], []]; // 三行
 */

/**
 * 一个Table所需：
 * 在添加新数据时，移除原有的，追加新的数据。
 * 当还有子元素时，每行携带tbody row config
 *
 */

// Define the configuration for each cell
const cellConfigs = [
  { prop: "a", isEdit: true, callback: handleCellEdit },
  { prop: "b", isEdit: true, callback: handleCellEdit },
  {
    prop: "c",
    components: [
      {
        tagName: "select",
        options: [{ prop: "aa", text: "AA", prop: "cc", text: "CC" }],
        callback: handleCellSelect,
      },
    ],
  },
];

function handleCellEdit(event) {
  console.log("CellEdit:", event);
}
function handleCellSelect(event) {
  console.log("handleCellSelect:", event);
}

class TableComponent {
  constructor(prop) {
    console.log("This is TableComponent:", prop);
    this._prop = prop;
    /** 在这里处理一些数据 */
    /** 每次加载数据条数 */
    this._batchSize = 10;
    /** 数据总条数 */
    this._totalRows = this._prop.tbody.data.length;
    /** 当前最大行数 */
    this._currentRowIndex = 0;
  }
  /**
   * 通常在实例化之后，调用该函数，构建一个Table
   * @returns 返回构建的一个Table，用于挂载于指定el
   */
  init() {
    const table = document.createElement("table");
    table.appendChild(this.createThead(this._prop.thead));
    table.appendChild(this.createTbody(this._prop.tbody));
    // 给table绑一个滚动事件
    table.addEventListener("scroll", this.handleScroll.bind(this));
    return table;
  }

  handleScroll(event) {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    if (
      scrollHeight - scrollTop === clientHeight &&
      this._currentRowIndex < this._totalRows
    ) {
      // loadBatch();
    }
  }
  createThead(data) {
    console.log("createThead:", data);
    const thead = document.createElement("thead");
    data.forEach((rowData) => thead.appendChild(this.createRow(rowData)));
    return thead;
  }

  createTbody(data) {
    console.log("createTbody:", data);
    const tbody = document.createElement("tbody");
    data.forEach((rowData) => tbody.appendChild(this.createRow(rowData)));
    return tbody;
  }

  createRow(rowData) {
    console.log("createRow:", rowData);
    const row = document.createElement("tr");
    row.addEventListener("click", this.handleRowChange);

    if (Array.isArray(rowData)) {
      rowData.forEach((cellData) => row.appendChild(this.createTh(cellData)));
    } else {
      console.log("Not Array:", rowData);
      row.appendChild(this.createCell(rowData));
    }
    return row;
  }

  createTh(cellData) {
    const th = document.createElement("th");
    th.dataset.prop = cellData.prop;
    th.innerHTML = cellData.text;
    if (cellData.rowspan) th.rowSpan = cellData.rowspan;
    if (cellData.colspan) th.colSpan = cellData.colspan;
    return th;
  }

  createCell(cellData) {
    console.log("createCell:", cellData);
    /** 这里主要是因为第一列通常是th，便于固定列 */
    const cell = document.createElement(cellData.tagName || "td");
    cell.innerHTML = cellData.text;
    // 单元格直接是可编辑的
    if (cellData.isEdit) {
      cell.contentEditable = true;
      cell.addEventListener("input", cellData.callback);
    }
    if (cellData.children) {
      console.log("需要子元素：", cellData.children);
    }
    console.log("cell:", cell);
    return cell;
  }
  /**
   * 行点击事件。可能改为回调形式
   * @param {*} event
   */
  handleRowChange(event) {
    // Implement the row change handler here
  }
}

class TableCreator {
  createTable(data) {
    const table = document.createElement("table");

    // Create table head
    const thead = document.createElement("thead");
    data.thead.forEach((rowData) => {
      const row = document.createElement("tr");
      rowData.forEach((cellData) => {
        const th = document.createElement("th");
        th.innerHTML = cellData.text;
        if (cellData.rowspan) th.rowSpan = cellData.rowspan;
        if (cellData.colspan) th.colSpan = cellData.colspan;
        row.appendChild(th);
      });
      thead.appendChild(row);
    });
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    data.tbody.forEach((rowData) => {
      const row = document.createElement("tr");
      row.addEventListener("click", this.handleRowChange);
      rowData.forEach((cellData) => {
        const td = document.createElement("td");
        td.innerHTML = cellData.text;
        if (cellData.rowspan) td.rowSpan = cellData.rowspan;
        if (cellData.colspan) td.colSpan = cellData.colspan;
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    return table;
  }

  handleRowChange(event) {
    // Implement the row change handler here
  }
}

const tableData = {
  thead: [],
  tbody: [],
};

const tableCreator = new TableCreator();
const table = tableCreator.createTable(tableData);

document.body.appendChild(table);
