/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
import { TreeLinkNode } from '../Interface';
declare const connect2: (root: TreeLinkNode) => void;
declare const connect: (root: TreeLinkNode) => void;
export { connect, connect2 };
