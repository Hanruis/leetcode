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
export interface IListNode {
    val: number;
    next: IListNode;
}
declare const reverseList: (head: IListNode) => IListNode;
declare const reverseList2: (head: IListNode) => IListNode;
export { reverseList, reverseList2 };
