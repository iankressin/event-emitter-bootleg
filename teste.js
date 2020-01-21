const EventEmitter = require("./EvenEmitter.js");

const em = new EventEmitter();

const x = () => console.log("teste");

em.once("teste", x);

const ln = em.listenerCount("removedListener");
console.log(ln);
