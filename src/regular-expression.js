/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: regular-expression.js
  Directory: src
  Author: Lokavit
  Birthtime: 2023/5/20 14:23:11
  -----
  Mtime: 2023/5/28 19:07:30
  WordCount: 63
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====
    一些正则表达式
*/

/**
 * 对于数字区间 正则匹配 返回匹配结果
 * @param {*} str 数字区间
 * @param {*} val 需要匹配到数字区间的值
 * @returns
 */
const Intervals = (str, val) => {
  //   console.log("匹配 =number:", str.match(/^=(\d+)$/));
  //   console.log("匹配 [number,number]:", str.match(/^\[(\d+),(\d+)\]$/));
  //   console.log("匹配 [number:", str.match(/^\[(\d+)$/));
  //   console.log("匹配 number]:", str.match(/^(\d+)\]$/));
  //   console.log("匹配 [number,number):", str.match(/^\[(\d+),(\d+)\)$/));
  //   console.log("匹配 (number,number]:", str.match(/^\((\d+),(\d+)\]$/));
  //   console.log("匹配 (number:", str.match(/^\((\d+)$/));
  //   console.log("匹配 number):", str.match(/^(\d+)\)$/));

  let result;
  switch (str) {
    /** =number */
    case str.match(/^=(\d+)$/)?.input:
      //   console.log("匹配 =number:", str.match(/^=(\d+)$/));
      result = val == str.match(/^=(\d+)$/)[1];
      break;
    /** [number,number] */
    case str.match(/^\[(\d+),(\d+)\]$/)?.input:
      //   console.log("匹配 [number,number]:", str.match(/^\[(\d+),(\d+)\]$/));
      result =
        val >= str.match(/^\[(\d+),(\d+)\]$/)[1] &&
        val <= str.match(/^\[(\d+),(\d+)\]$/)[2];
      break;
    /** [number */
    case str.match(/^\[(\d+)$/)?.input:
      //   console.log("匹配 [number:", str.match(/^\[(\d+)$/));
      result = val >= str.match(/^\[(\d+)$/)[1];
      break;
    /** number] */
    case str.match(/^(\d+)\]$/)?.input:
      //   console.log("匹配 number]:", str.match(/^(\d+)\]$/));
      result = val < str.match(/^(\d+)\]$/)[1];
      break;
    /** [number,number) */
    case str.match(/^\[(\d+),(\d+)\)$/)?.input:
      //   console.log("匹配 [number,number):", str.match(/^\[(\d+),(\d+)\)$/));
      result =
        val >= str.match(/^\[(\d+),(\d+)\)$/)[1] &&
        val < str.match(/^\[(\d+),(\d+)\)$/)[2];
      break;
    /** (number,number] */
    case str.match(/^\((\d+),(\d+)\]$/)?.input:
      //   console.log("匹配 [number,number):", str.match(/^\((\d+),(\d+)\]$/));
      result =
        val > str.match(/^\((\d+),(\d+)\]$/)[1] &&
        val <= str.match(/^\((\d+),(\d+)\]$/)[2];
      break;
    /** (number */
    case str.match(/^\((\d+)$/)?.input:
      //   console.log("匹配 [number:", str.match(/^\((\d+)$/));
      result = val > str.match(/^\((\d+)$/)[1];
      break;
    /** number) */
    case str.match(/^(\d+)\)$/)?.input:
      //   console.log("匹配 number]:", str.match(/^(\d+)\)$/));
      result = val < str.match(/^(\d+)\)$/)[1];
      break;

    default:
      break;
  }

  return result;
};
