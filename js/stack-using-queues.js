var MyStack = function() {
	this.queue = [];
};

MyStack.prototype.push = function(x) {
	this.queue.push(x);
};

MyStack.prototype.pop = function() {
    var queue = this.queue;

	return queue.splice(queue.length -1, 1)[0];
};

MyStack.prototype.top = function() {
    var queue = this.queue;

	return queue[queue.length -1];
};

MyStack.prototype.empty = function() {
    var queue = this.queue;

	return queue.length === 0  ? true : false;
};