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
import { ITreeNode } from '../Interface';
declare const postorderTraversal: (root: ITreeNode) => number[];
export { postorderTraversal };
