/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    var currentStack = this;
    this.struct = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    var currentStack = this;
    currentStack.struct.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    var currentStack = this;
    return currentStack.struct.splice(struct.length - 1, 1);
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    var currentStack = this;
    this.struct[struct.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    var currentStack = this;
    return currentStack.struct.length === 0 ? true : false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */