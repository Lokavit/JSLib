/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: input.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 13:17:25
  -----
  Mtime: 2023/5/8 19:04:05
  WordCount: 0
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

class InputComponent {
  constructor() {
    console.log("InputComponent:", this);
  }
  createInput(data) {
    console.log("input data:", data);
    let _input = document.createElement("input");
    _input.setAttribute("type", data.type);
    _input.setAttribute("name:", data.prop);
    _input.setAttribute("id:", data.prop);
    _input.setAttribute("value", data.value || "");
    if (data.type == "checkbox") {
      _input.checked = value == 1 ? "checked" : "";
    }
    return _input;
  }
}
