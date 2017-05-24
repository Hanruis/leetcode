/**
 * initialize your data structure here.
 */
class MinStack{

    static createNew(){
        return new MinStack();
    }

    private _stack: number[] = [];
    private _minStack: number[] = [];

    push(x: number): void{
        this._stack.push(x);
        if (!this._minStack.length){
            this._minStack.push(x);
        }else if (x <= this.getMin()){
            this._minStack.push(x);
        }
    }
    createNew(){
        return new MinStack();
    }
    pop(): number{
        const num = this._stack.pop();
        if (num === this.getMin()){
            this._minStack.pop();
        }
        return num;
    }
    top(): number{
        return this._stack[this._stack.length - 1];
    }
    getMin(){
        return this._minStack[this._minStack.length - 1];
    }
}

export {
    MinStack
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */