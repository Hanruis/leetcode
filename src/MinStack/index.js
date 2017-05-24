"use strict";
/**
 * initialize your data structure here.
 */
var MinStack = (function () {
    function MinStack() {
        this._stack = [];
        this._minStack = [];
    }
    MinStack.createNew = function () {
        return new MinStack();
    };
    MinStack.prototype.push = function (x) {
        this._stack.push(x);
        if (!this._minStack.length) {
            this._minStack.push(x);
        }
        else if (x <= this.getMin()) {
            this._minStack.push(x);
        }
    };
    MinStack.prototype.createNew = function () {
        return new MinStack();
    };
    MinStack.prototype.pop = function () {
        var num = this._stack.pop();
        if (num === this.getMin()) {
            this._minStack.pop();
        }
        return num;
    };
    MinStack.prototype.top = function () {
        return this._stack[this._stack.length - 1];
    };
    MinStack.prototype.getMin = function () {
        return this._minStack[this._minStack.length - 1];
    };
    return MinStack;
}());
exports.MinStack = MinStack;
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */ 
