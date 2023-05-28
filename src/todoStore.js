/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: todoStore.js
  Directory: src
  Author: Lokavit
  Birthtime: 2023/5/21 22:35:43
  -----
  Mtime: 2023/5/27 23:24:52
  WordCount: 201
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

/**
 * addTodoItem 方法用于向列表中添加新项目；
removeTodoItem 方法用于删除指定 id 的项目；
toggleTodoItemComplete 方法用于切换指定 id 项目的完成状态；
每次执行上述方法后，我们通过调用继承自父类的 setState 来更新存储状态。通知状态变化时，会遍历所有已注册监听器并逐个调用它们。
 */
class TodoStore extends Store {
  addTodoItem(itemText) {
    const newItem = { id: Date.now(), text: itemText, completed: false };
    // const updatedItems = [...this.getState().items, newItem];
    // this.setState({ items: updatedItems });
    this.setState({ items: newItem });
  }

  removeTodoItem(itemId) {
    const filteredItems = this.getState().items.filter(
      (item) => item.id !== itemId
    );
    this.setState({ items: filteredItems });
  }

  toggleTodoItemComplete(itemId) {
    const updatedItems = this.getState().items.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    this.setState({ items: updatedItems });
  }
}
