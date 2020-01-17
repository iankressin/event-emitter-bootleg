class EventEmitter {
  _events = {};

  on(event, eventHandler) {
    return this.addEventListener(event, eventHandler);
  }

  addEventListener(event, eventHandler) {
    this._events[event] = this._events[event] || [];
    this._events[event].push(eventHandler);
  }

  removeListener(event, eventHandler) {
    const events = this._events;
    if (events === undefined) return this;

    const eventHandlerList = events[event];
    if (events === undefined) return this;

    if (
      eventHandlerList === eventHandler ||
      eventHandlerList.eventHandler === eventHandler
    ) {
      console.log("");
    }
  }

  once(event, eventHandler) {}

  emit(event, eventHandler) {}

  listenerCount(event) {}

  rawListeners(event) {}
}
