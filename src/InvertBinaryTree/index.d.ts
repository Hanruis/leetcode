/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
export declare const invertTree: (root: TreeNode) => TreeNode;
