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
"use strict";
var rightSideView = function (root) {
    var maxDepth = 0;
    var result = [];
    function rightSide(node, depth) {
        if (node) {
            if (depth > maxDepth) {
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
exports.rightSideView = rightSideView;
