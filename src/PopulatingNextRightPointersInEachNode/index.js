/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */
"use strict";
// 宽度优先搜索；
// 注意下面的要求，完美的二叉树。如果没有这个条件的话，就比较那啥了。
// You may only use constant extra space.
// You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
var connect2 = function (root) {
    var queue = [];
    if (root === null) {
        return;
    }
    queue.push(root);
    queue.push(null);
    var i = 0;
    while (i < queue.length) {
        var ele = queue[i];
        if (ele) {
            ele.next = queue[i + 1] || null;
            if (ele.left) {
                queue.push(ele.left);
            }
            if (ele.right) {
                queue.push(ele.right);
            }
        }
        else if (ele === null && i < queue.length - 1) {
            queue.push(null);
        }
        i++;
    }
};
exports.connect2 = connect2;
var connect = function (root) {
    if (!root) {
        return;
    }
    var pre = root;
    var cur = null;
    while (pre.left) {
        cur = pre;
        while (cur) {
            cur.left.next = cur.right;
            if (cur.next) {
                cur.right.next = cur.next.left;
            }
            cur = cur.next;
        }
        pre = pre.left;
    }
};
exports.connect = connect;
