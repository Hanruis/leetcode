/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export interface ITreeNode {
    val: number;
    left: ITreeNode;
    right: ITreeNode;
}
declare const inorderTraversal: (root: ITreeNode) => number[];
declare const inorderTraversal2: (root: ITreeNode) => number[];
export { inorderTraversal, inorderTraversal2 };
