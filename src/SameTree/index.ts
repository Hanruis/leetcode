/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

interface TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
}

const isSameTree = function (sourceTree: TreeNode, targetTree: TreeNode) {
    if (sourceTree && targetTree) {
        if (sourceTree.val === targetTree.val) {
            return isSameTree(sourceTree.left, targetTree.left) && isSameTree(sourceTree.right, targetTree.right);
        }else {
            return false;
        }
    } else if (sourceTree === null && targetTree === null) {
        return true;
    } else {
        return false;
    }
};

export {
    isSameTree
};