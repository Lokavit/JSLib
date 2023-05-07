/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: dom.js
  Directory: util
  Author: Lokavit
  Birthtime: 2022/12/19 23:22:06
  -----
  Mtime: 2023/4/20 21:33:17
  WordCount: 32
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====
 * 关于dom的操作
 * 为指定元素添加/移除/检查指定类名
*/

const Dom = new Object();

/**
 * 为指定元素添加样式.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 */
Dom.addClass = function (element, className) {
  let classes = element.getAttribute("class") || "";
  if ((" " + classes + " ").indexOf(" " + className + " ") != -1) return false;
  if (classes) classes += " ";
  element.setAttribute("class", classes + className);
  return true;
};

/**
 * 为指定元素移除样式
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 */
Dom.removeClass = function (element, className) {
  let classes = element.getAttribute("class");
  if ((" " + classes + " ").indexOf(" " + className + " ") == -1) return false;

  let classList = classes.split(/\s+/);
  for (let i = 0; i < classList.length; i++) {
    if (!classList[i] || classList[i] == className) {
      classList.splice(i, 1);
      i--;
    }
  }

  classList.length
    ? element.setAttribute("class", classList.join(" "))
    : element.removeAttribute("class");
  return true;
};

/**
 * 为指定元素检查是否有指定样式
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 */
Dom.hasClass = function (element, className) {
  let classes = element.getAttribute("class");
  return (" " + classes + " ").indexOf(" " + className + " ") != -1;
};

export default Dom;
