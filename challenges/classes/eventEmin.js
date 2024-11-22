/**
 Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!(eventName in this.events)) {
      this.events[eventName] = new Set([callback]);
    } else {
      this.events[eventName].add(callback);
    }

    return {
      unsubscribe: () => {
        this.events[eventName].delete(callback);
      },
    };
  }

  emit(eventName, args = []) {
    if (!(eventName in this.events)) return [];
    const result = [];
    this.events[eventName].forEach((fn) => {
      result.push(fn(...args));
    });
    return result;
  }
}
