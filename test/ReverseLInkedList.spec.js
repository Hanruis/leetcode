var {expect} = require('chai')
var {reverseList, reverseList2} = require("../src/ReverseLinkedList")
var { linkedListToArray, arrayToLinkedList, createListNode } = require("./utils")



describe('ReverseLInkedList:reverseList', () => {
    
    it('should be null while head = null', () => {
        expect(reverseList(null)).to.eq(null)
    });

    it('should be [1], while linkedList = [1]', () => {
        const linkedList = createListNode(1)
        const reversedLinkedList = reverseList(linkedList)
        expect(linkedListToArray(reversedLinkedList)).to.eql([1])
    });

    it('should be [1,2], while linkedList = [2,1]', () => {
        const linkedList = arrayToLinkedList([1,2,3,4])
        const reversedLinkedList = reverseList(linkedList)
        expect(linkedListToArray(reversedLinkedList)).to.eql([4,3,2,1])
    });
         
});
    

describe('ReverseLInkedList:reverseList2', () => {
    
    it('should be null while head = null', () => {
        expect(reverseList2(null)).to.eq(null)
    });

    it('should be [1], while linkedList = [1]', () => {
        const linkedList = createListNode(1)
        const reversedLinkedList = reverseList2(linkedList)
        expect(linkedListToArray(reversedLinkedList)).to.eql([1])
    });

    it('should be [1,2], while linkedList = [2,1]', () => {
        const linkedList = arrayToLinkedList([1,2])
        const reversedLinkedList = reverseList2(linkedList)
        expect(linkedListToArray(reversedLinkedList)).to.eql([2,1])
    });
         
});
    