/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: event.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/21 10:12:31
  -----
  Mtime: 2023/5/21 10:15:30
  WordCount: 0
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/

// Event manager
class EventManager {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  unsubscribe(eventName, callback) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(
      (eventCallback) => eventCallback !== callback
    );
  }

  publish(eventName, data) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach((eventCallback) => eventCallback(data));
  }
}

// Event controller
class EventController {
  constructor(eventManager) {
    this.eventManager = eventManager;
  }

  sendEvent(eventName, data) {
    this.eventManager.publish(eventName, data);
  }

  receiveEvent(eventName, callback) {
    this.eventManager.subscribe(eventName, callback);
  }

  stopReceivingEvent(eventName, callback) {
    this.eventManager.unsubscribe(eventName, callback);
  }
}

// Create an event manager
const eventManager = new EventManager();

// Create an event controller with the event manager
const eventController = new EventController(eventManager);

// Component A sends an event
eventController.sendEvent("myEvent", { message: "Hello, world!" });

// Component B receives the event
eventController.receiveEvent("myEvent", (data) => {
  console.log(data.message); // Output: "Hello, world!"
});

// // Component A sends another event
// eventController.sendEvent("myEvent", { message: "Goodbye, world!" });

// // Component B stops receiving the event
// // eventController.stopReceivingEvent("myEvent", callback);
// eventController.stopReceivingEvent("myEvent", (e) => {
//   console.log("e:", e);
// });
