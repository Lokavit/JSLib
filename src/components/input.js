/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: input.js
  Directory: components
  Author: Lokavit
  Birthtime: 2023/5/7 13:17:25
  -----
  Mtime: 2023/5/21 10:06:42
  WordCount: 0
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

// I want table Component Packaging use JavaScript and use ES6 class

/**
 * @class input component
 */
class InputComponent {
  constructor() {
    console.log("InputComponent:", this);
  }
  render(config) {
    console.log("input config:", config);
    const input = document.createElement("input");
    input.setAttribute("type", config.type);
    input.setAttribute("name:", config.prop);
    input.setAttribute("id:", config.prop);
    input.setAttribute("value", config.value || "");
    if (config.callback) {
      input.addEventListener("input", config.callback);
      // input.addEventListener("input", this.handleInputEvent.bind(this));
    }
    if (config.type == "checkbox") {
      input.checked = config.value == 1 ? "checked" : "";
    }
    return input;
  }

  // handleInputEvent(event) {
  //   console.log("InputComponent input event:", event);
  //   return event;
  // }
}

// class InputComponent {
//   constructor() {
//     this.inputElement = document.createElement("input");
//     this.inputElement.type = "text";
//     // this.inputElement.addEventListener("input", this.handleInput);
//     this.inputElement.addEventListener("input", (e) => {
//       const event = new CustomEvent("myEvent", {
//         detail: { value: e.target.value },
//       });
//       console.log(event);

//       document.dispatchEvent(event);
//     });
//   }

//   handleInput = (event) => {
//     console.log(event.target.value);
//   };

//   render() {
//     return this.inputElement;
//   }
