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

const inorderTraversal = function (root: ITreeNode): number[] {

    let result: number[] = [];

    if (!root) {
        return result;
    }

    if (root.left) {
        result = result.concat(inorderTraversal(root.left));
    }
    result.push(root.val);

    if (root.right) {
        result = result.concat(inorderTraversal(root.right));
    }

    return result;

};


const inorderTraversal2 = function (root: ITreeNode): number[] {

    let result: number[] = [];
    const nodesArray: ITreeNode[] = [];

    let currentNode = root;
    // 虽然是循环的写法，实际上是递归。
    // 所以在这里还是不要陷入到循环的套路上了，递归是必须要做的事情。
    while (currentNode || nodesArray.length) {
        while (currentNode) {
            nodesArray.push(currentNode);
            currentNode = currentNode.left;
        }
        const last = nodesArray.pop();
        result.push(last.val);
        currentNode = last.right;
    }
    return result;

};


export {
    inorderTraversal,
    inorderTraversal2
};