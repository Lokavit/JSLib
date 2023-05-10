/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: input.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 13:17:25
  -----
  Mtime: 2023/5/10 21:10:26
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
  render(data) {
    console.log("input data:", data);
    const input = document.createElement("input");
    input.setAttribute("type", data.type);
    input.setAttribute("name:", data.prop);
    input.setAttribute("id:", data.prop);
    input.setAttribute("value", data.value || "");
    if (data.type == "checkbox") {
      input.checked = value == 1 ? "checked" : "";
    }
    return input;
  }
}
