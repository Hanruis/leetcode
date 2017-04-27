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
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    var preNode = null;
    var curNode = head;
    var nextNode = head.next;
    while (nextNode) {
        curNode.next = preNode;
        preNode = curNode;
        curNode = nextNode;
        nextNode = nextNode.next;
    }
    curNode.next = preNode;
    return curNode;
};
exports.reverseList = reverseList;
var reverseList2 = function (head) {
    function _reverse(node, list) {
        if (list === null) {
            return node;
        }
        var last = _reverse(list, list.next);
        list.next = node;
        return last;
    }
    if (!head) {
        return null;
    }
    return _reverse(null, head);
};
exports.reverseList2 = reverseList2;
