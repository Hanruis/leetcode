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

import { IListNode } from '../Interface';


class ListNode{
    val: number;
    next: IListNode | null;
    constructor(val, next?){
        this.val = val;
        this.next = next ? next : null;
    }
}

// slowPonter 起步就是 fakeHead
const rotateRight = function(head: IListNode, k: number): IListNode {

    if (!head){
        return null;
    }

    const fakeHeader = new ListNode(0);
    fakeHeader.next = head;

    let slowPointer: IListNode = fakeHeader;
    let fastPointer: IListNode = fakeHeader;
    let listLength = 0;
    let node: IListNode = head;

    while (node){
        listLength++;
        node = node.next;
    }
    let mode = k % listLength;

    const targetIndex = mode + 1;
    for (let i = 1; i <= targetIndex; i++) {
        if (fastPointer){
            fastPointer = fastPointer.next;
        }else{
            return head;
        }
    }

    if (!fastPointer){
        return head;
    }

    while (fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
    slowPointer = slowPointer.next;
    if (slowPointer.next){
        fakeHeader.next = slowPointer.next;
    }
    if (fastPointer){
        fastPointer.next = head;
    }
    slowPointer.next = null;
    return fakeHeader.next;
};



export {
    rotateRight
};