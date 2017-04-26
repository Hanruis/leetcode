/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
declare function maxDepth(root: TreeNode): number;
export { maxDepth };
