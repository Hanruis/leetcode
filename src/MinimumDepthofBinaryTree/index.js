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
var minDepth = function (root) {
    var depth = 0;
    if (!root) {
        return depth;
    }
    var queue = [root, null];
    for (var i = 0; i < queue.length; i++) {
        var node = queue[i];
        if (node) {
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            if (!node.left && !node.right) {
                depth += 1;
                break;
            }
        }
        else {
            if (queue[i + 1] === null) {
                break;
            }
            else {
                queue.push(null);
                depth += 1;
            }
        }
    }
    return depth;
};
exports.minDepth = minDepth;
