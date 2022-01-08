var events = require("events");
var emitter = new events.EventEmitter();

/**
 * 订阅事件1
 */
emitter.on("someEvent", function (arg1, arg2) {
	console.log("listener1", arg1, arg2);
});

/**
 * 订阅事件2
 */
emitter.on("someEvent", function (arg1, arg2) {
	console.log("listener2", arg1, arg2);
});

/**
 * 派发事件
 */
emitter.emit("someEvent", "arg1 参数", "arg2 参数");
