/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: button.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 13:17:39
  -----
  Mtime: 2023/5/27 21:41:38
  WordCount: 6
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

class ButtonComponent {
  constructor() {
    console.log("ButtonComponent:", this);
  }

  /**
   *
   * @param {Object} config
   * @param {String} config.prop 属性
   * @param {String} config.text 明文
   * @param {Event} config.action 事件
   * @returns
   */
  render(config) {
    const button = document.createElement("button");
    button.dataset.prop = config.prop;
    button.textContent = config.text;
    if (config.action) button.addEventListener("click", config.action);
    return button;
  }
}
