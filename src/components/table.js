/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: table.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 14:11:55
  -----
  Mtime: 2023/5/28 16:05:52
  WordCount: 0
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/
// const data =[{}]
// const allKeys = Array.from(new Set(data.flatMap(Object.keys)));

class TableComponent {
  constructor() {
    console.log("TableComponent:", this);

    this.buttonComponent = new ButtonComponent();
    this.selectComponent = new SelectComponent();
    this.tableId = "";
    this.theadConfig = [];
    this.tbodyConfig = [];
    this.tbodyData = [];
  }

  init() {
    const table = document.createElement("table");
    table.setAttribute("id", this.tableId);
    table.appendChild(this.buildThead(this.theadConfig));
    table.appendChild(this.buildTbody(this.tbodyConfig, this.tbodyData));
    return table;
  }

  render() {
    console.log("render():", this);
  }
  buildThead(configs) {
    const thead = document.createElement("thead");
    if (configs.length <= 1) {
      thead.appendChild(this.buildRow(configs));
    } else {
      configs.forEach((config) => {
        thead.appendChild(this.buildRow(config));
      });
    }
    return thead;
  }
  buildTbody(config, tbodyData) {
    console.log("buildTbody():", config);
    console.log("buildTbody():", tbodyData);
    const tbody = document.createElement("tbody");

    if (tbodyData.length <= 0) {
      tbody.appendChild(this.buildRow(config));
    } else {
      tbodyData.forEach((row) => {
        tbody.appendChild(this.buildRow(config, row));
      });
    }

    return tbody;
  }
  buildRow(config, rowData = {}) {
    console.log("buildRow():", config);
    console.log("buildRow():", rowData);
    const row = document.createElement("tr");
    Object.keys(config).forEach((key) => {
      console.log("keyValue:", config[key]);
      row.appendChild(this.buildCell(config[key], rowData));
    });

    return row;
  }
  buildCell(config, cellData) {
    console.log("buildCell():", config);
    console.log("buildCell():", cellData);
    const cell = document.createElement(
      `${config.tagName == "th" ? "th" : "td"}`
    );

    if (config.rowspan) cell.rowSpan = config.rowspan;
    if (config.colspan) cell.colSpan = config.colspan;
    if (config.prop) cell.dataset.prop = config.prop;

    if (!config.components) {
      if (config.contenteditable)
        cell.setAttribute("contenteditable", config.contenteditable);
      // cell.textContent = config.tagName == "th" ? config.text : cellData.text;
      cell.textContent = config.text;
    }

    if (config.components && config.components.length > 0) {
      config.components.forEach((component) => {
        switch (component.tagName) {
          case "select":
            component.value = config.text;
            console.log("?", component);
            cell.appendChild(this.selectComponent.render(component));
            break;
          case "button":
            cell.appendChild(this.buttonComponent.render(config));
            break;
          default:
            console.log("Other TagName!");
            break;
        }
      });
    }
    return cell;
  }
}
