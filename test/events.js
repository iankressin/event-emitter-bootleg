const test = require("tape");
const EventEmitter = require("../EvenEmitter.js");

test("Register event", t => {
  const em = new EventEmitter();
  const eventName = "testEvent";

  em.on(eventName, () => "Test");
  t.assert(em.listenerCount(eventName) === 1, "Correctly registered event");
});
