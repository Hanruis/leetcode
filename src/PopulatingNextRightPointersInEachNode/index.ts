/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */


import { TreeLinkNode } from '../Interface';

// 宽度优先搜索；
// 注意下面的要求，完美的二叉树。如果没有这个条件的话，就比较那啥了。
// You may only use constant extra space.
// You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
const connect2 = function(root: TreeLinkNode): void {
    const queue: (TreeLinkNode | null)[]  = [];

    if (root === null){
        return;
    }

    queue.push(root);
    queue.push(null);

    let i = 0;
    while (i < queue.length) {
        let ele = queue[i];
        if (ele){
            ele.next = queue[i + 1] || null;
            if (ele.left){
                queue.push(ele.left);
            }
            if (ele.right){
                queue.push(ele.right);
            }
        }else if (ele === null && i < queue.length - 1 ){
            queue.push(null);
        }
        i++;
    }

};

const connect = function(root: TreeLinkNode): void {

    if (!root){
        return;
    }

    let pre = root;
    let cur: TreeLinkNode = null;

    while (pre.left){
        cur = pre;
        while (cur){
            cur.left.next = cur.right;
            if (cur.next){
                cur.right.next = cur.next.left;
            }
            cur = cur.next;
        }
        pre = pre.left;
    }
};


export {
    connect,
    connect2
};