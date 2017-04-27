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

import { ITreeNode } from '../interface';

export const invertTree = function(root: ITreeNode): ITreeNode {

    if (!root) {
        return null;
    }

    invertTree(root.left);
    invertTree(root.right);

    const {left, right} = root;
    root.left = right;
    root.right = left;

    return root;
};
