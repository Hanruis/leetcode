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
"use strict";
function findMaxDepth(node, depth) {
    if (!node) {
        return depth;
    }
    else {
        depth += 1;
        return Math.max(findMaxDepth(node.left, depth), findMaxDepth(node.right, depth));
    }
}
function maxDepth(root) {
    return findMaxDepth(root, 0);
}
exports.maxDepth = maxDepth;
