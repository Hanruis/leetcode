/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
"use strict";
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    invertTree(root.left);
    invertTree(root.right);
    var left = root.left, right = root.right;
    root.left = right;
    root.right = left;
    return root;
};
module.exports = invertTree;
