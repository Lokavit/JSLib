/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: todoStore.js
  Directory: src
  Author: Lokavit
  Birthtime: 2023/5/21 22:35:43
  -----
  Mtime: 2023/5/21 22:35:51
  WordCount: 99
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

/**
 * addTodoItem 方法用于向列表中添加新项目；
removeTodoItem 方法用于删除指定 id 的项目；
toggleTodoItemComplete 方法用于切换指定 id 项目的完成状态；
每次执行上述方法后，我们通过调用继承自父类的 setState 来更新存储状态。通知状态变化时，会遍历所有已注册监听器并逐个调用它们。
 */
class TodoStore extends Store {
  addTodoItem(itemText) {
    const newItem = { id: Date.now(), text: itemText, completed: false };
    const updatedItems = [...this.getState().items, newItem];
    this.setState({ items: updatedItems });
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
