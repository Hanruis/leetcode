/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export interface TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
}
declare const isSameTree: (sourceTree: TreeNode, targetTree: TreeNode) => any;
export { isSameTree };
