"use strict";
var isSameTree = function (sourceTree, targetTree) {
    if (sourceTree && targetTree) {
        if (sourceTree.val === targetTree.val) {
            return isSameTree(sourceTree.left, targetTree.left) && isSameTree(sourceTree.right, targetTree.right);
        }
        else {
            return false;
        }
    }
    else if (sourceTree === null && targetTree === null) {
        return true;
    }
    else {
        return false;
    }
};
exports.isSameTree = isSameTree;
