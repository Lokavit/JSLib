/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: testComponent.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/21 22:21:10
  -----
  Mtime: 2023/5/21 22:21:37
  WordCount: 12
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("组件挂载");
  }

  componentWillUnmount() {
    console.log("组件卸载");
  }

  componentDidUpdate() {
    console.log("组件更新");
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  renderElement() {
    const { count } = this.state;
    const button = document.createElement("button");
    button.textContent = `Click me (${count})`;
    button.addEventListener("click", () => this.handleClick());
    return button;
  }
}
