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
exports.invertTree = function (root) {
    if (!root) {
        return null;
    }
    exports.invertTree(root.left);
    exports.invertTree(root.right);
    var left = root.left, right = root.right;
    root.left = right;
    root.right = left;
    return root;
};
