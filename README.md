# Event Emitter Bootleg

This is a simple implementation of node's EventEmitter basic methods that runs in any environment.

## Available methods
- on(eventName, listener);
- off(eventName, listener);
- once(eventName, listener);
- emit(eventName, args);
- listenerCount(eventName);
- rawListeners(eventName);


## Installation

```bash
npm install event-emitter-bootleg
```

## Usage

``` js
const EventEmitter = require("event-emitter-bootleg");

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

```
or

``` js
var EventEmitter = require("event-emitter-bootleg");

var em = new EventEmitter(); 

if ("Stranger") {
  em.on("danger", () => console.log("Auff");
  if ("Stranger gets closer") {
    em.emit("danger");
  }
}

```

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
