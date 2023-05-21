/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: table.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 14:11:55
  -----
  Mtime: 2023/5/21 22:44:07
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
  }

  render() {
    console.log("render():", this);
  }
  buildThead() {
    console.log("buildThead():", this);
  }
  buildTbody() {
    console.log("buildTbody():", this);
  }
  buildRow() {
    console.log("buildRow():", this);
  }
  buildCell() {
    console.log("buildCell():", this);
  }
}
