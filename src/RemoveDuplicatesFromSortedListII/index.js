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
// 链表常见的套路
// 1. fakeHead
// 2. slow fast pointers
var deleteDuplicates = function (head) {
    var fakeHead = {
        val: 0,
        next: null
    };
    fakeHead.next = head;
    var prev = fakeHead;
    var cur = head;
    while (cur) {
        while (cur.next !== null && cur.val === cur.next.val) {
            cur = cur.next;
        }
        if (prev.next !== cur) {
            prev.next = cur.next;
        }
        else {
            prev = cur;
        }
        cur = cur.next;
    }
    return fakeHead.next;
};
exports.deleteDuplicates = deleteDuplicates;
