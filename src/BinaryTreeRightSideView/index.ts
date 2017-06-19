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

const rightSideView = function(root: ITreeNode): number[] {
    let maxDepth = 0;
    const result: number[] = [];

    function rightSide(node: ITreeNode, depth: number) {
        if (node){
            if (depth > maxDepth){
                result.push(node.val);
                maxDepth = depth;
            }
            node.right && rightSide(node.right, depth + 1);
            node.left && rightSide(node.left, depth + 1);
        }
    }

    rightSide(root, 1);
    return result;
};

export {
    rightSideView
};