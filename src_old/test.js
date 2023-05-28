/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\test.js
 * Project: lib
 * Author: Lokavit
 * Created Date: 2023-04-10 2:12:03
 * -----
 * Last Modified: 2023-04-12 10:51:40
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 *
 */

import * as GithubAPI from "./api_github.js";
import { Hooks } from "./hook/hook.js";
import { CheckIncludesValue } from "./string/CheckIncludesValue.js";

async function getuserinfo() {
  const userinfo = await GithubAPI.getUser("/users/Lokavit");
  console.info("userinfo:", userinfo);
}

async function getRepos() {
  const repos = await GithubAPI.githubGetRepository("Lokavit", "notes");
  console.info("repos:", repos);
}

async function getReposContents() {
  const result = await GithubAPI.githubGetRepositoryContent(
    "Lokavit",
    "notes",
    "docs"
  );
  console.info("指定文件或目录:", result);
  const results = await GithubAPI.githubGetRepositoryContent(
    "Lokavit",
    "notes",
    "docs/RIME.md"
  );
  console.info("指定文件:", results);
}

async function getPeposIssue() {
  const result = await GithubAPI.githubGetRepositoryIssue("Lokavit", "notes");
  console.info("指定仓库的issue:", result);
}

async function getPeposIssueInfo() {
  const result = await GithubAPI.githubGetRepositoryIssueDetail(
    "Lokavit",
    "notes",
    "1"
  );
  console.info("指定仓库的issueNumber:", result);
}

// async function getissue() {
//   const result = await GithubAPI.githubGetissueInfo();
//   console.info("issue:", result);
// }

// 测试github API
// getuserinfo();
// getRepos();
// getReposContents();
// getPeposIssue();
// getPeposIssueInfo();
// getissue();

// 动态import 并使用
// import("./sum.js").then((Module) => {
//   console.log("sum:", Module.sum(10, 5));
// });

// 测试 import html 会有MIME问题。
// import("../html/nav.html").then((html) => {
//   console.info("import html:", html);
// });

/**
 * github中文件raw的基本URL
 */
export const RAW_URL = `https://raw.githubusercontent.com/Lokavit`;
/**
 * 根据url判断当前运行在github还是本地
 */
export const CheckRunEnv = window.location.host.includes("github");
/**
 * 根据当前项目运行环境，动态替换fetch html文件时的url
 */
export const HTML_RAW = !CheckRunEnv
  ? `${window.location.origin}`
  : `${RAW_URL}/lib-js/main`;

/**
 * html片段挂载文档的hook。挂载到 DOM 树中的指定位置
 * @param {string} html 片段
 * @param {string} el 挂载html片段的节点[e.父元素，兄弟元素]
 * @param {string} position 指定位置
 * el.insertAdjacentHTML("afterbegin", html);//元素内部的第一个子节点之前
 */
export const htmlHook = (html, el, position) =>
  el.insertAdjacentHTML(`${position}`, html);

/**
 * insertAdjacentHTML() 以及insertAdjacentText()
 * 挂载dom的位置指定。
 */
export const InsertPosition = {
  beforebegin: "beforebegin", //元素自身的前面
  afterbegin: "afterbegin", //元素内部的第一个子节点之前
  beforeend: "beforeend", //元素内部的最后一个子节点之后
  afterend: "afterend", //元素自身的后面
};

// 使用hooks
let hooks = new Hooks();
console.log("class hooks:", hooks);

// hooks.add("before", () => {});
// hooks.call("before");

hooks.add("init", (data) => {
  console.log("init data:", data);
});

hooks.call("init", "???", (_t) => {
  console.log("_t:", _t);
});

const _hooks = ["init"];

// _hooks.forEach((element) => {});

console.log("_hooks:", _hooks);
_hooks["init"] = [];
console.log("_hooks:", _hooks["init"]);

_hooks["init"].push((_temp) => {
  console.log("_temp:", _temp);
});

console.log("_hooks.init:", _hooks["init"]);

DocumentFragment;

/**
 * 自定义hook
 * 读取配置DOM结构。
 * 拉取所需DOM片段。
 * 使用 document.createDocumentFragment()
 *
 *
 *
 *
 * 使用自定义hook ,根据配置文件，将DOM拼成完整<body>内容</body>
 * 执行时机：
 */

// hooks.add("after", (html) => {
//   console.info("html:::::", html);
//   htmlHook(html, document.body, InsertPosition.afterbegin);
// });

// /**
//  *
//  * @param {string} html_url html片段
//  */
// async function insertHTML(html_url) {
//   // 可以用于内部文件，亦支持https等协议请求
//   const res = await fetch(html_url);
//   const html = await res.text();
//   hooks.call("after", html);
// }

/**
 *
 * @param {*} src
 * @param {*} callback
 */
async function loadHtml(src, callback) {
  const res = await fetch(src);
  const _html = await res.text();
  callback();
}

// /**
//  *
//  */

// insertHTML(`${HTML_RAW}/html/nav.html`);
// insertHTML(`${HTML_RAW}/html/header.html`);
// insertHTML(`${HTML_RAW}/html/footer.html`);

// export async function createHTML(html, el, position) {}
