var {expect} = require('chai')
var {deleteDuplicates} = require("../src/RemoveDuplicatesFromSortedListII")
var { arrayToLinkedList, linkedListToArray } = require("./utils")

describe('RemoveDuplicatesFromSortedListII:deleteDuplicates', () => {
    
    it('should be 1,2,5 while list = 1,2,3,3,4,4,5', () => {
        const list = arrayToLinkedList([1,2,3,3,4,4,5])
        const resolvedList = deleteDuplicates(list);
        const arr = linkedListToArray(resolvedList);
        expect(arr).to.eql([1,2,5])
    });

    it('should be 3,4 while list = 1,1,3,4', () => {
        const list = arrayToLinkedList([1,1,3,4])
        const resolvedList = deleteDuplicates(list);
        const arr = linkedListToArray(resolvedList);
        expect(arr).to.eql([3,4])
    });

    it('should be [] while list = []', () => {
        const resolvedList = deleteDuplicates(null);
        const arr = linkedListToArray(resolvedList);
        expect(arr).to.eql([])
    });

    it('should be [] while list = 1,1,1,1', () => {
        const list = arrayToLinkedList([1,1,1,1])
        const resolvedList = deleteDuplicates(list);
        const arr = linkedListToArray(resolvedList);
        expect(arr).to.eql([])
    });

    it('should be [2] while list = 1,1,1,1,2', () => {
        const list = arrayToLinkedList([1,1,1,1,2])
        const resolvedList = deleteDuplicates(list);
        const arr = linkedListToArray(resolvedList);
        expect(arr).to.eql([2])
    });

    it('should be [3] while list = 3,1,1,1,1', () => {
        const list = arrayToLinkedList([3,1,1,1,1])
        const resolvedList = deleteDuplicates(list);
        const arr = linkedListToArray(resolvedList);
        expect(arr).to.eql([3])
    });

    it('should be [1] while list = 1', () => {
        const list = arrayToLinkedList([1])
        const resolvedList = deleteDuplicates(list);
        const arr = linkedListToArray(resolvedList);
        expect(arr).to.eql([1])
    });

});
    