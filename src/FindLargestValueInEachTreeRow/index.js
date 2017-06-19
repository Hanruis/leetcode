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
var largestValues = function (root) {
    var result = [];
    var treeRows = [];
    if (!root) {
        return result;
    }
    treeRows.push(root);
    treeRows.push(null);
    var max = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < treeRows.length; i++) {
        var treeNode = treeRows[i];
        if (treeNode) {
            max = Math.max(max, treeNode.val);
            if (treeNode.left) {
                treeRows.push(treeNode.left);
            }
            if (treeNode.right) {
                treeRows.push(treeNode.right);
            }
        }
        else if (treeRows[i + 1]) {
            treeRows.push(null);
            result.push(max);
            max = Number.MIN_SAFE_INTEGER;
        }
    }
    return result;
};
exports.largestValues = largestValues;
