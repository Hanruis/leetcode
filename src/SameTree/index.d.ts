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
import { ITreeNode } from '../interface';
declare const isSameTree: (sourceTree: ITreeNode, targetTree: ITreeNode) => any;
export { isSameTree };
