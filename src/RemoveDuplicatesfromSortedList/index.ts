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

const deleteDuplicates = function(head: IListNode): IListNode {

    let curNode = head;

    while (curNode) {
        let nextNode = curNode.next;
        if (nextNode && curNode.val === nextNode.val ){
            curNode.next = nextNode.next;
        }else{
            curNode = curNode.next;
        }
    }

    return head;
};

export {
    deleteDuplicates
};