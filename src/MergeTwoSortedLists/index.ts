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

import { IListNode } from '../Interface';

function min<T, U>(sourceArray: T[], filter: (item: T) => U): T {
    if (!sourceArray.length){
        return null;
    }
    let min: U;
    let minItem: T;
    sourceArray.forEach((ele) => {
        const result = filter(ele);
        if (typeof min === 'undefined'){
            min = result;
            minItem = ele;
        }else if (result <= min){
            min = result;
            minItem = ele;
        }
    });
    return minItem;
}


function max<T, U>(sourceArray: T[], filter: (item: T) => U): T {
    if (!sourceArray.length){
        return null;
    }
    let max: U;
    let maxItem: T;
    sourceArray.forEach((ele) => {
        const result = filter(ele);
        if (typeof max === 'undefined'){
            max = result;
            maxItem = ele;
        }else if (result >= max){
            max = result;
            maxItem = ele;
        }
    });
    return maxItem;
}

const mergeTwoLists = function(l1: IListNode, l2: IListNode): IListNode {

    if (!l1 || !l2){
        return l1 || l2 || null;
    }
    // 这样写的话，会有危险的。就是要注意下，在 l1.val = l2.val 的时候， min 和 max 都会返回同一个对象。
    // 这个时候 listPointer，和 head 都指向同一个链表。然后就 GG 了。
    let head = min<IListNode, number>([l1, l2], (node) => node.val);
    let listPointer = max<IListNode, number>([l2, l1], (node) => node.val);
    let curListNode = head;


    while (curListNode){
        let nextNode = curListNode.next;
        if (nextNode){
            if ( nextNode.val <= listPointer.val){
                curListNode = nextNode;
            }else{
                curListNode.next = listPointer;
                listPointer = nextNode;
            }
        }else{
            curListNode.next = listPointer;
            break;
        }
    }

    return head;

};



export {
    mergeTwoLists
};