var {expect} = require('chai')
var {deleteDuplicates} = require("../src/RemoveDuplicatesfromSortedList")
var {createListNode, linkedListToArray} = require("./utils")


describe('RemoveDuplicatesfromSortedList:deleteDuplicates', () => {
    
    it('should be [1] while linkedList = [1]', () => {
        const linkedList = createListNode(1);
        deleteDuplicates(linkedList)
        expect(linkedListToArray(linkedList)).to.eql([1])
    });
    
    
    it('should be [1] while linkedList = [1,1]', function() {
        const linkedList = createListNode(1);
        linkedList.next = createListNode(1);
        deleteDuplicates(linkedList)
        expect(linkedListToArray(linkedList)).to.eql([1])
    });

    it('should be [1, 2] while linkedList = [1,1, 2]', function() {
        const linkedList = createListNode(1);
        linkedList.next = createListNode(1);
        linkedList.next.next = createListNode(2)
        deleteDuplicates(linkedList)
        expect(linkedListToArray(linkedList)).to.eql([1,2])
    });

    it('should be [1, 2,2,3] while linkedList = [1,2, 3]', function() {
        const linkedList = createListNode(1);
        linkedList.next = createListNode(2);
        linkedList.next.next = createListNode(2)
        linkedList.next.next.next = createListNode(3)
        deleteDuplicates(linkedList)
        expect(linkedListToArray(linkedList)).to.eql([1,2, 3])
    });

});
    