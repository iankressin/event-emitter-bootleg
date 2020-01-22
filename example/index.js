const EventEmitter = require("../EvenEmitter.js");

var Dog = function() {
  this.sound = "Auff";
};

Dog.prototype = new EventEmitter();

Dog.prototype.bark = function() {
  this.emit("danger");
};

Dog.prototype.alert = function() {
  this.on("danger", () => console.log(this.sound));
};

var dog = new Dog();

if ("Stranger") {
  dog.alert();
  if ("Stranger gets closer") {
    dog.bark();
  }
}
