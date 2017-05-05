/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
"use strict";
function min(sourceArray, filter) {
    if (!sourceArray.length) {
        return null;
    }
    var min;
    var minItem;
    sourceArray.forEach(function (ele) {
        var result = filter(ele);
        if (typeof min === 'undefined') {
            min = result;
            minItem = ele;
        }
        else if (result <= min) {
            min = result;
            minItem = ele;
        }
    });
    return minItem;
}
function max(sourceArray, filter) {
    if (!sourceArray.length) {
        return null;
    }
    var max;
    var maxItem;
    sourceArray.forEach(function (ele) {
        var result = filter(ele);
        if (typeof max === 'undefined') {
            max = result;
            maxItem = ele;
        }
        else if (result >= max) {
            max = result;
            maxItem = ele;
        }
    });
    return maxItem;
}
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2 || null;
    }
    // 这样写的话，会有危险的。就是要注意下，在 l1.val = l2.val 的时候， min 和 max 都会返回同一个对象。
    // 这个时候 listPointer，和 head 都指向同一个链表。然后就 GG 了。
    var head = min([l1, l2], function (node) { return node.val; });
    var listPointer = max([l2, l1], function (node) { return node.val; });
    var curListNode = head;
    while (curListNode) {
        var nextNode = curListNode.next;
        if (nextNode) {
            if (nextNode.val <= listPointer.val) {
                curListNode = nextNode;
            }
            else {
                curListNode.next = listPointer;
                listPointer = nextNode;
            }
        }
        else {
            curListNode.next = listPointer;
            break;
        }
    }
    return head;
};
exports.mergeTwoLists = mergeTwoLists;
