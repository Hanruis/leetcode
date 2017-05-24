/**
 * initialize your data structure here.
 */
declare class MinStack {
    static createNew(): MinStack;
    private _stack;
    private _minStack;
    push(x: number): void;
    createNew(): MinStack;
    pop(): number;
    top(): number;
    getMin(): number;
}
export { MinStack };
