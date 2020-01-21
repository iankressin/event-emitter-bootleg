const test = require("tape");
const EventEmitter = require("../EvenEmitter.js");

test("Register event", t => {
  const em = new EventEmitter();
  const eventName = "testEvent";

  em.on(eventName, () => 1);
  t.assert(em.listenerCount(eventName) === 1, "Correctly registered event");
  t.end()
});

test("Emit event", t => {
  const em = new EventEmitter();
  const eventName = "testEvent";
  let result; 

  em.on(eventName, () => result = 1);
  em.emit(eventName);

  t.assert(result === 1, "Event was correctly emitted");
  t.end()
})

test("Unregister event", t => {
  const em = new EventEmitter();
  const eventName = "testEvent";
  
  const listener = () => 1

  em.on(eventName, listener);
  t.assert(em.listenerCount(eventName) === 1, "Registered")

  em.removeListener(eventName, listener)
  t.assert(em.listenerCount(eventName) === 0, "Unregistered")

  t.end()
})

test("Once event", t => {
  const em = new EventEmitter();
  const eventName = "event";

  em.once(eventName, () => null)
  t.assert(em.listenerCount(eventName) === 1, "Correctly registered event");

  em.emit(eventName);
  t.assert(em.listenerCount(eventName) === 0, "Correctly emited once");
  
  t.end();
})
