/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
"use strict";
var ListNode = (function () {
    function ListNode(val, next) {
        this.val = val;
        this.next = next ? next : null;
    }
    return ListNode;
}());
// slowPonter 起步就是 fakeHead
var rotateRight = function (head, k) {
    if (!head) {
        return null;
    }
    var fakeHeader = new ListNode(0);
    fakeHeader.next = head;
    var slowPointer = fakeHeader;
    var fastPointer = fakeHeader;
    var listLength = 0;
    var node = head;
    while (node) {
        listLength++;
        node = node.next;
    }
    var mode = k % listLength;
    var targetIndex = mode + 1;
    for (var i = 1; i <= targetIndex; i++) {
        if (fastPointer) {
            fastPointer = fastPointer.next;
        }
        else {
            return head;
        }
    }
    if (!fastPointer) {
        return head;
    }
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
    slowPointer = slowPointer.next;
    if (slowPointer.next) {
        fakeHeader.next = slowPointer.next;
    }
    if (fastPointer) {
        fastPointer.next = head;
    }
    slowPointer.next = null;
    return fakeHeader.next;
};
exports.rotateRight = rotateRight;
