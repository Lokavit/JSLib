/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: component.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/21 22:20:27
  -----
  Mtime: 2023/5/21 22:20:27
  WordCount: 32
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // 组件挂载时调用
  componentDidMount() {}

  // 组件卸载时调用
  componentWillUnmount() {}

  // 组件更新时调用
  componentDidUpdate() {}

  // 渲染组件
  render() {
    const newElement = this.renderElement();
    if (this.element) {
      this.element.replaceWith(newElement);
    }
    this.element = newElement;
  }

  // 渲染组件的 DOM 元素
  renderElement() {}
}
