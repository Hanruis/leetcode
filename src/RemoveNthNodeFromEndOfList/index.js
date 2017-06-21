/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
"use strict";
var removeNthFromEnd = function (head, n) {
    var fakeHeader = createListNode(0);
    fakeHeader.next = head;
    var prev = fakeHeader;
    var listLength = 0;
    var index = 0;
    var cur = head;
    while (cur) {
        cur = cur.next;
        listLength++;
    }
    if (n > listLength) {
        return fakeHeader.next;
    }
    cur = head; // reset
    var targetIndex = listLength - n + 1;
    while (cur) {
        index++;
        if (index === targetIndex) {
            prev.next = cur.next;
        }
        else {
            prev = cur;
            cur = cur.next;
        }
    }
    return fakeHeader.next;
};
exports.removeNthFromEnd = removeNthFromEnd;
var createListNode = function (val) {
    return {
        val: val,
        next: null
    };
};
