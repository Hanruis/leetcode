export { BinaryTree, TreeNode };
declare class TreeNode {
    value: any;
    val: any;
    left: TreeNode;
    right: TreeNode;
    next: TreeNode;
    constructor(value: any);
    leafSide(value: any): "left" | "right";
}
declare class BinaryTree {
    root: TreeNode;
    constructor(value: any);
    append(value: any): void;
    initalByArray(arr: any[]): void;
    del(value: any): TreeNode;
    findParent(value: any): TreeNode | null;
    preorder(): any;
    has(value: any): boolean;
    find(value: any): TreeNode;
}
