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

import { ITreeNode } from '../interface';

function findMaxDepth(node: ITreeNode, depth: number): number {
    if (!node) {
        return depth;
    } else {
        depth += 1;
        return Math.max(findMaxDepth(node.left, depth), findMaxDepth(node.right, depth));
    }
}


function maxDepth(root: ITreeNode): number {
    return findMaxDepth(root, 0);
}

export {
    maxDepth
};