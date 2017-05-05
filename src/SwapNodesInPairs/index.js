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
var swapPairs = function (head) {
    var leadingNode = head;
    var trailingNode = head ? head.next : null;
    var prevListEnd = head;
    // 交换开头的一对，并设置 head
    // 可以通过借助一个临时的节点作为开头，这样就不用先做一次交换，代码也更加清晰。
    if (trailingNode) {
        prevListEnd = leadingNode;
        head = trailingNode;
        swap();
    }
    while (leadingNode && trailingNode) {
        prevListEnd.next = trailingNode;
        prevListEnd = leadingNode;
        swap();
    }
    function swap() {
        leadingNode.next = trailingNode.next;
        trailingNode.next = leadingNode;
        leadingNode = leadingNode.next;
        trailingNode = leadingNode ? leadingNode.next : null;
    }
    return head;
};
exports.swapPairs = swapPairs;
