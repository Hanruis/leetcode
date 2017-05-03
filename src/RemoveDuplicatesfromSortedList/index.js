/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
"use strict";
var deleteDuplicates = function (head) {
    var curNode = head;
    while (curNode) {
        var nextNode = curNode.next;
        if (nextNode && curNode.val === nextNode.val) {
            curNode.next = nextNode.next;
        }
        else {
            curNode = curNode.next;
        }
    }
    return head;
};
exports.deleteDuplicates = deleteDuplicates;
