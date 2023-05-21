/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: demoTable.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/21 17:19:49
  -----
  Mtime: 2023/5/21 17:27:10
  WordCount: 22
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====
  这是JSP的对应页面
*/

class PageTable {
  /**
   *
   * @param {*} prop 主要用于JSP页面传递值进来
   */
  constructor(prop) {
    console.log("PageTable", this);
    this.prop = prop;
    console.log("this._prop:", this.prop);
    /**
     * 一些需要实例化的组件类
     */
    this.tableComponent = new TableComponent();
    console.log("this.tableComponent:", this.tableComponent);
  }
  render() {
    console.log("render()", this);
  }
}
