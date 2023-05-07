/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\string\CheckIncludesValue.js
 * Project: lib
 * Author: Lokavit
 * Created Date: 2023-04-11 10:45:34
 * -----
 * Last Modified: 2023-04-11 10:45:46
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 *
 */

/**
 * 检测字符串中是否包含指定字符串
 * @param {*} str 需检测的字符串
 * @param {*} val 包含的字符串
 * @returns 包含返回str，否则返回false
 * @example
 * CheckIncludesValue('str','va;');
 */
export const CheckIncludesValue = (str, val) => str.includes(val) && str;
