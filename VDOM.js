/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: VDOM.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/21 22:13:11
  -----
  Mtime: 2023/5/21 22:13:11
  WordCount: 4
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

class VNode {
  constructor(tag, props, children) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }

  render() {
    const el = document.createElement(this.tag);

    for (let prop in this.props) {
      el.setAttribute(prop, this.props[prop]);
    }

    if (this.children) {
      if (typeof this.children === "string") {
        el.textContent = this.children;
      } else {
        this.children.forEach((child) => {
          const childEl =
            child instanceof VNode
              ? child.render()
              : document.createTextNode(child);
          el.appendChild(childEl);
        });
      }
    }

    return el;
  }
}

// 使用示例
const vnode = new VNode("div", { class: "container" }, [
  new VNode("h1", { class: "title" }, "Hello, World!"),
  new VNode("p", { class: "content" }, "This is a VNode example."),
]);

const el = vnode.render();
document.body.appendChild(el);
