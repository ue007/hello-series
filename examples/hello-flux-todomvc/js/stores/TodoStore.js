var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var _todos = {};

var TodoStore = assign({}, EventEmitter.prototype, {
	/**
	 * get all datas
	 * @returns
	 */
	getAll: function () {
		return _todos;
	},

	/**
	 * 新增一条todo
	 * @param {*} text
	 */
	create: function (text) {
		var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(
			36
		);
		_todos[id] = {
			id: id,
			complete: false,
			text: text,
		};
	},

	/**
	 * 销毁所有任务
	 * @param {*} id
	 */
	destroy: function (id) {
		delete _todos[id];
	},

	/**
	 * 完成任务
	 */
	destroyCompleted: function () {
		for (var id in _todos) {
			if (_todos[id].complete) {
				this.destroy(id);
			}
		}
	},

	/**
	 * 更新已知任务内容
	 * @param {*} id
	 * @param {*} updates
	 */
	update: function (id, updates) {
		_todos[id] = assign({}, _todos[id], updates);
	},
});

module.exports = TodoStore;
