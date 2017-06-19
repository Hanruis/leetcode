/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
"use strict";
var levelOrder = function (root) {
    var result = [];
    var treeLevelOrder = [];
    if (!root) {
        return result;
    }
    treeLevelOrder.push(root);
    treeLevelOrder.push(null);
    for (var i = 0; i < treeLevelOrder.length; i++) {
        var node = treeLevelOrder[i];
        if (node) {
            node.left && treeLevelOrder.push(node.left);
            node.right && treeLevelOrder.push(node.right);
        }
        else if (i < treeLevelOrder.length - 1) {
            treeLevelOrder.push(null);
        }
    }
    var j = 0;
    while (j < treeLevelOrder.length) {
        var tempArr = [];
        var node = treeLevelOrder[j];
        while (node) {
            tempArr.push(node.val);
            node = treeLevelOrder[++j];
        }
        node = treeLevelOrder[++j];
        result.push(tempArr);
    }
    return result;
};
exports.levelOrder = levelOrder;
