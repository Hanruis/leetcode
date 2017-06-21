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

import { IListNode } from '../Interface';

const removeNthFromEnd = function(head: IListNode, n: number): IListNode {
    const fakeHeader: IListNode = createListNode(0);
    fakeHeader.next = head;
    let prev: IListNode = fakeHeader;
    let listLength = 0;
    let index = 0;
    let cur: IListNode = head;
    while (cur){
        cur = cur.next;
        listLength++;
    }

    if (n > listLength){
        return fakeHeader.next;
    }

    cur = head; // reset
    let targetIndex = listLength - n + 1;

    while (cur){
        index++;
        if (index === targetIndex){
            prev.next = cur.next;
        }else{
            prev = cur;
            cur = cur.next;
        }
    }

    return fakeHeader.next;

};

const createListNode = (val): IListNode => {
    return {
        val,
        next: null
    };
};

export {
    removeNthFromEnd
};