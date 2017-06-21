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

import { IListNode } from '../Interface';

// 链表常见的套路
// 1. fakeHead
// 2. slow fast pointers
const deleteDuplicates = function(head: IListNode): IListNode {

    let fakeHead: IListNode = {
        val: 0,
        next: null
    };
    fakeHead.next = head;
    let prev: IListNode = fakeHead;
    let cur: IListNode = head;
    while (cur) {
        while (cur.next !== null && cur.val === cur.next.val){
            cur = cur.next;
        }
        if (prev.next !== cur){
            prev.next = cur.next;
        }else{
            prev = cur;
        }
        cur = cur.next;
    }
    return fakeHead.next;
};

export {
    deleteDuplicates
};