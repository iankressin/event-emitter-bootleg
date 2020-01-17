class EventEmitter {
  _events = {};

  on(type, listener) {
    return this.addEventListener(type, listener);
  }

  addEventListener(type, listener) {
    this._events[type] = this._events[type] || [];
    this._events[type].push(listener);
  }

  off(type, listener) {
    return this.removeListener(type, listener);
  }

  // Return this for chaining purposes
  removeListener(type, listener) {
    let removedListener;

    const events = this._events;
    if (events === undefined) return this;

    const list = events[type];
    if (list === undefined) return this;

    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener) {
        removedListener = listener[i].listener;
        list.splice(i, 1);
        this.emit("removedListener", type, removedListener);
        break;
      }
    }

    return this;
  }

  once(type, listener) {
    this.listener[type] = this.listener[type] || [];

    const onceWrapper = () => {
      listener();
      this.off(type, onceWrapper);
    };

    this.listener[type].push(onceWrapper);
    return this;
  }

  emit(type, ...args) {
    let eventListeners = this._events[type] || [];
    if (!eventListeners) return false;

    const length = eventListeners.length;
    for (let i = 0; i < length; i++) {
      Reflect.apply(eventListeners[i], this, args);
    }

    return true;
  }

  listenerCount(type) {
    let eventListeners = this._events[type] || [];
    return eventListeners.length;
  }

  rawListeners(type) {
    return this._events[type];
  }
}
