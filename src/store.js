/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: store.js
  Directory: src
  Author: Lokavit
  Birthtime: 2023/5/21 22:33:43
  -----
  Mtime: 2023/5/21 22:34:44
  WordCount: 102
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

/**
 * 构造函数 constructor 初始化了初始状态和监听器集合；
setState 方法用于更新状态并通知所有监听器；
getState 方法用于返回当前状态；
subscribe 方法用于注册新的监听器，并且会返回取消订阅该监听器的方法；
unsubscribe 方法用于删除现有监听器；
notifyListeners 方法用于遍历执行全部监听器；
 */
class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = new Set();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifyListeners();
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.unsubscribe(listener);
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.getState()));
  }
}
