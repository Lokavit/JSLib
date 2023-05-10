/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: select.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 13:17:33
  -----
  Mtime: 2023/5/8 19:00:58
  WordCount: 0
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

class SelectComponent {
  constructor() {
    console.log("SelectComponent:", this);
  }
  createSelect(data, value) {
    console.log("createSelect data:", data);
    const select = document.createElement("select");
    if (!data.options) return;
    data.options.map((item) => {
      console.log("item?", item);
      item.value == value
        ? select.options.add(new Option(value, item.key, false, true))
        : select.options.add(new Option(item.value, item.key));
    });
    return select;
  }
}
