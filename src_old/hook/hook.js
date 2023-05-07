/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\hook\hook.js
 * Project: lib
 * Author: Lokavit
 * Created Date: 2023-04-11 8:36:25
 * -----
 * Last Modified: 2023-04-12 10:04:58
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 * 实现一个hook
 */

export class Hooks {
  constructor() {
    /**
     * 队列，先进先出，任务队列
     */
    this.queue = {};
  }

  // initLifecycle() {
  //   /** 预置的hook */
  //   const hooks = ["init", "after"];
  //   console.log("hooks:", hooks);
  // }

  /**
   * 向队列中添加hook
   * @param {*} name hook名
   * @param {*} fn 函数
   */
  add(name, fn) {
    console.info("add name:", name);
    console.info("add fn:", fn);
    /** 若在队列中找不到指定name的任务 */
    !this.queue[name] && (this.queue[name] = []);
    console.info("this.queue[name]:", this.queue[name]);
    /** 在该name的队列中，push传入的fn */
    this.queue[name].push(fn);
    console.info("this.queue[name].push:", this.queue[name]);
  }

  call(name, ...params) {
    console.info("call name:", name);
    console.info("call params:", ...params);
    if (this.queue[name]) {
      this.queue[name].forEach((fn) => {
        fn(...params);
      });
      console.info("call this.queue:", this.queue);
      /** 不将该hook从队列中移除，则可以一直循环执行 */
      // delete this.queue[name];
      // console.info("this.queue:", this.queue);
    }
  }
}
