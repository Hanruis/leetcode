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

const largestValues = function(root: ITreeNode): number[] {
    const result: number[] = [];
    const treeRows: (ITreeNode|null)[] = [];

    if (!root){
        return result;
    }

    treeRows.push(root);
    treeRows.push(null);
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < treeRows.length; i++){
        const treeNode = treeRows[i];
        if (treeNode){
            max = Math.max(max, treeNode.val);
            if (treeNode.left){
                treeRows.push(treeNode.left);
            }
            if (treeNode.right){
                treeRows.push(treeNode.right);
            }
        }else if (treeRows[i + 1]){
            treeRows.push(null);
            result.push(max);
            max = Number.MIN_SAFE_INTEGER;
        }
    }

    return result;
};

export {
    largestValues
};