var EventEmitter = require("eventemitter3");
var EE = new EventEmitter(),
	context = {
		foo: "bar",
	};

function emitted(e) {
	console.log(e);
	console.log(this === context); // true
}

EE.once("event-name", emitted, context);
EE.on("another-event", emitted, context);
EE.removeListener("another-event", emitted, context);
EE.emit("event-name", {
	oldValue: "hello-event-name-old",
	newValue: "hello-event-name-new",
});
