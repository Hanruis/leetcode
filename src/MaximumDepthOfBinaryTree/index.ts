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
export interface TreeNode {
    val: number;
    left: TreeNode|null;
    right: TreeNode|null;
}

function findMaxDepth(node: TreeNode, depth: number): number {
    if (!node) {
        return depth;
    } else {
        depth += 1;
        return Math.max(findMaxDepth(node.left, depth), findMaxDepth(node.right, depth));
    }
}


function maxDepth(root: TreeNode): number {
    return findMaxDepth(root, 0);
}

export {
    maxDepth
};