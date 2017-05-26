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

import { ITreeNode } from '../Interface';

const minDepth = function(root: ITreeNode) {
    let depth = 0;

    if (!root){
        return depth;
    }

    const queue = [root, null];

    for (let i = 0; i < queue.length; i++){
        const node = queue[i];
        if (node){
            if (node.left){
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
            if (!node.left && !node.right){
                depth += 1;
                break;
            }
        }else{
            if(queue[i + 1] === null){
                break;
            }else{
                queue.push(null);
                depth += 1;
            }
        }
    }


    return depth;
};

export {
    minDepth
};