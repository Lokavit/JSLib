/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \api_github.js
 * Project: src
 * Author: Lokavit
 * Created Date: 2023-04-10 7:33:06
 * -----
 * Last Modified: 2023-04-11 10:47:50
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 * github相关API
 * 遇到需要token情况，给个变量，具体在需要的地方传入
 */

import { CheckIncludesValue } from "./string/CheckIncludesValue.js";

/** github API */
const Basic_URL = `https://api.github.com`;

/** 仓库 */
const Repos_URL = `${Basic_URL}/repos/`;

/** issues 相关 */
// const issues_URL = `${Basic_URL}/issues`;

// https://api.github.com/repos/Lokavit/notes/issues/1/comments

/**
 *
 */
export const Github_API_URL = (url) => `${Basic_URL}${url}`;

// export const API_Repos_URL = (url) =>
//   `${(url = url.includes("/repos") ? url : `/repos/${url}`)}`;

/**
 * API:/users/{username}
 * @param {string} data username
 * @returns 用户信息
 */
export async function getUser(data) {
  // 逻辑或：前者为false返回后者。
  data = CheckIncludesValue(data, "/users") || `/users/${data}`;
  console.info("data:", data);
  const res = await fetch(`${Github_API_URL(data)}`);
  return res.json();
}

/**
 * 获取一个仓库
 * @param {string} owner 仓库所有者
 * @param {string} repo 仓库名
 * @returns 指定用户的指定仓库
 */
export async function githubGetRepository(owner, repo) {
  const res = await fetch(`${Repos_URL}${owner}/${repo}`);
  return res.json();
}
/**
 * 获取仓库指定文件或目录的内容
 * @param {string} owner 仓库所有者
 * @param {string} repo 仓库名
 * @param {string} path 内容路径
 * @returns 返回文件或目录
 */
export async function githubGetRepositoryContent(owner, repo, path) {
  const res = await fetch(`${Repos_URL}${owner}/${repo}/contents/${path}`);
  return res.json();
}

/**
 * 获取指定仓库的issue
 * @param {string} owner 仓库所有者
 * @param {string} repo 仓库名
 * @returns 该仓库的issue
 */
export async function githubGetRepositoryIssue(owner, repo) {
  const res = await fetch(`${Repos_URL}${owner}/${repo}/issues`);
  return res.json();
}

/**
 * 获取指定仓库issue的指定某一个issue
 * @param {string} owner 仓库所有者
 * @param {string} repo 仓库名
 * @param {string} issue_number issues编号
 * @returns 该仓库的issue
 */
export async function githubGetRepositoryIssueDetail(
  owner,
  repo,
  issue_number
) {
  const res = await fetch(
    `${Repos_URL}${owner}/${repo}/issues/${issue_number}`
  );
  return res.json();
}

// /**
//  * 获取 issue 信息
//  * @returns 返回issue信息
//  */
// export async function githubGetissueInfo() {
//   const res = await fetch(`${issue_URL}`);
//   return res.json();
// }
