/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

import { ITreeNode } from '../Interface';

const levelOrder = function(root: ITreeNode): number[][] {
    const result: number[][] = [];
    const treeLevelOrder: ITreeNode[] = [];
    if (!root){
        return result;
    }

    treeLevelOrder.push(root);
    treeLevelOrder.push(null);

    for (let i = 0; i < treeLevelOrder.length; i++){
        const node = treeLevelOrder[i];
        if (node){
            node.left && treeLevelOrder.push(node.left);
            node.right && treeLevelOrder.push(node.right);
        }else if (i < treeLevelOrder.length - 1){
            treeLevelOrder.push(null);
        }
    }

    let j = 0;
    while (j < treeLevelOrder.length) {
        const tempArr = [];
        let node = treeLevelOrder[j];
        while (node){
            tempArr.push(node.val);
            node = treeLevelOrder[++j];
        }
        node = treeLevelOrder[++j];
        result.push(tempArr);
    }
    return result;
};

export {
    levelOrder
};