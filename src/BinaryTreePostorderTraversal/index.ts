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

const postorderTraversal = function(root: ITreeNode): number[] {
    const result = <number[]>[];

    if (!root){
        return result;
    }

    function walk(treeNode: ITreeNode) {
        if (treeNode.left){
            walk(treeNode.left);
        }
        if (treeNode.right){
            walk(treeNode.right);
        }
        result.push(treeNode.val);
    }
    walk(root);
    return result;
};

export {
    postorderTraversal
};