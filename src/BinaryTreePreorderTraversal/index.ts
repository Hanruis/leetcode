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

import { ITreeNode } from '../interface';

const preorderTraversal = function (root: ITreeNode): number[] {

    if (!root ) {
        return [];
    }

    let result: number[] = [];

    if (root) {
        result.push(root.val);
    }
    if (root.left) {
        result = result.concat(preorderTraversal(root.left));
    }
    if (root.right) {
        result = result.concat(preorderTraversal(root.right));
    }

    return result;
};


export {
    preorderTraversal
};