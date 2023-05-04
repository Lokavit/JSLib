/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: testEvent.js
  Directory: lib-js
  Author: Lokavit
  Birthtime: 2023/5/4 19:56:16
  -----
  Mtime: 2023/5/4 22:19:10
  WordCount: 69
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/
console.log("testEvent!");

const btnSaveClick = (val) => {
  console.log("btnSaveClick!", val.target);
};
const btnDelClick = (val) => {
  console.log("btnDelClick!", val.target);
};

let data = [
  { name: "Save", callback: btnSaveClick },
  { name: "Del", callback: btnDelClick },
];
// console.log("Object:", data);
// console.log("Object:", data.callback);

/** 以下为类写法 实例化在其它页面  */
class TestEvent {
  constructor(data) {
    this._data = data;
    console.log("data:", data);
    this.createBtnGroup(data);
  }
  createBtnGroup(val) {
    let _div = document.createElement("div");
    for (let i = 0; i < val.length; i++) {
      console.log("btn:", val[i]);
      _div.appendChild(this.createBtn(val[i].name, val[i].callback));
    }
    document.body.appendChild(_div);
  }
  createBtn(val, event) {
    let _btn = document.createElement("button");
    _btn.innerText = val;
    _btn.dataset.key = val;
    _btn.addEventListener("click", event);
    return _btn;
  }
}

/** 通常在外部使用 */
let testEvent = new TestEvent(data);

/** 以下为声明式箭头函数写法 需注意声明的次第关系，调用关系  */

// const createBtnGroup = (val) => {
//   let _div = document.createElement("div");
//   for (let i = 0; i < val.length; i++) {
//     console.log("btn:", val[i]);
//     _div.appendChild(createBtn(val[i].name, val[i].callback));
//   }

//   document.body.appendChild(_div);
// };
// // createBtn(data.name, data.callback);

// const createBtn = (val, event) => {
//   let _btn = document.createElement("button");
//   _btn.innerText = val;
//   _btn.dataset.key = val;
//   //   _btn.setAttribute("onClick", btnClick);
//   //   _btn.onclick = btnClick;
//   //   _btn.addEventListener("click", btnClick);
//   //   _btn.onclick = callback;
//   _btn.addEventListener("click", event);
//   //   _btn.addEventListener("click", (event) => {
//   //     _btn.textContent = `Click count: ${event.detail}`;
//   //   });
//   return _btn;
// };

// createBtnGroup(data);

/** 以下为普通函数写法 无需关心函数之间次第关系  */

// function createBtnGroup(val) {
//   let _div = document.createElement("div");

//   for (let i = 0; i < val.length; i++) {
//     console.log("btn:", val[i]);

//     _div.appendChild(createBtn(val[i].name, val[i].callback));

//     // for (const [key, value] of Object.entries(val[i])) {
//     //   console.log(key, value);
//     //   _div.appendChild(createBtn(key, value));
//     // }
//   }

//   document.body.appendChild(_div);
// }
// createBtn(data.name, data.callback);

// function createBtn(val, event) {
//   let _btn = document.createElement("button");
//   _btn.innerText = val;
//   _btn.dataset.key = val;
//   //   _btn.setAttribute("onClick", btnClick);
//   //   _btn.onclick = btnClick;
//   //   _btn.addEventListener("click", btnClick);
//   //   _btn.onclick = callback;
//   _btn.addEventListener("click", event);
//   //   _btn.addEventListener("click", (event) => {
//   //     _btn.textContent = `Click count: ${event.detail}`;
//   //   });
//   return _btn;
// }

// function btnSaveClick(val) {
//   console.log("btnSaveClick!", val.target);
// }
// function btnDelClick(val) {
//   console.log("btnDelClick!", val.target);
// }
