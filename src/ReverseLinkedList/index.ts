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


import { IListNode } from '../interface';

const reverseList = function (head: IListNode) {


    if (!head || !head.next) {
        return head;
    }

    let preNode = null;
    let curNode = head;
    let nextNode = head.next;

    while (nextNode) {
        curNode.next = preNode;
        preNode = curNode;

        curNode = nextNode;
        nextNode = nextNode.next;
    }
    curNode.next = preNode;
    return curNode;
};



const reverseList2 = function (head: IListNode): IListNode {

    function _reverse(node: IListNode, list: IListNode): IListNode {
        if (list === null) {
            return node;
        }

        const last = _reverse(list, list.next);
        list.next = node;
        return last;
    }

    if (!head) {
        return null;
    }

    return _reverse(null, head);

};


export {
    reverseList,
    reverseList2
};