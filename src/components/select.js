/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: select.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 13:17:33
  -----
  Mtime: 2023/5/28 16:10:11
  WordCount: 9
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

class SelectComponent {
  constructor() {
    console.log("SelectComponent:", this);
  }
  /**
   *
   * @param {Object} config
   * @param {String} config.prop select属性值
   * @param {Array} config.options 选项组
   * @param {Object} config.options.item {prop:'',text:''}
   * @param {String} config.value 选中值
   * @returns <select data-prop="name"><option value='a'>A</option></select>
   */
  render(config) {
    console.log("createSelect data:", config);
    const select = document.createElement("select");
    if (!config.options) return;
    select.dataset.prop = config.prop;
    select.setAttribute("name", config.prop);
    config.options.map((item) => {
      console.log("item?", item);
      item.prop == config.value
        ? select.options.add(new Option(config.value, item.prop, false, true))
        : select.options.add(new Option(item.text, item.prop));
    });
    if (config.action) select.addEventListener("change", config.action);
    return select;
  }
}
