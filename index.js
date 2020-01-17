class EventEmitter {
  listeners = [];

  emit = eventName => {
    this.listeners.forEach((event, index) => {
      if (event.eventName === eventName) {
        if (event.once) {
          this.listeners.splice(index, 1);
        }
        event.callback();
      }
    });
  };

  on = (eventName, callback) => {
    this.listeners.push({ eventName, callback, once: false });
  };

  removeListener = eventName => {
    const events = this.listeners.filter(
      listener => listener.eventName === eventName
    );
    events.forEach(event => {
      const index = this.listeners.indexOf(event);
      this.listeners.splice(index, 1);
    });
  };

  getListeners = () => {
    return this.listeners;
  };

  once = (eventName, callback) => {
    this.listeners.push({ eventName, callback, once: true });
  };
}

const ee = new EventEmitter();

ee.on("teste", () => console.log("Teste"));
ee.on("teste", () => console.log("Teste 2"));
ee.emit("teste");
ee.on("outroTeste", () => console.log("Outro teste"));
ee.removeListener("teste");
console.log(ee.getListeners());
