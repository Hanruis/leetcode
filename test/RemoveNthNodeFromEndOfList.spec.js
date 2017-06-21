var {expect} = require('chai')
var {removeNthFromEnd} = require("../src/RemoveNthNodeFromEndOfList")
var {linkedListToArray, arrayToLinkedList} = require("./utils")

describe('RemoveNthNodeFromEndOfList:removeNthFromEnd', () => {
    
    it('should be [] while list = null , target = 1', () => {
        const list = arrayToLinkedList([]);
        const resolvedList = removeNthFromEnd(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([])
    });

    it('should be [1] while list = [1] , target = 2', () => {
        const list = arrayToLinkedList([1]);
        const resolvedList = removeNthFromEnd(list, 2)
        expect(linkedListToArray(resolvedList)).to.eql([1])
    });

    it('should be [] while list = [1] , target = 1', () => {
        const list = arrayToLinkedList([1]);
        const resolvedList = removeNthFromEnd(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([])
    });

    it('should be [2] while list = [1,2] , target = 2', () => {
        const list = arrayToLinkedList([1,2]);
        const resolvedList = removeNthFromEnd(list, 2)
        expect(linkedListToArray(resolvedList)).to.eql([2])
    });

    it('should be [1] while list = [1,2] , target = 1', () => {
        const list = arrayToLinkedList([1,2]);
        const resolvedList = removeNthFromEnd(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([1])
    });

    it('should be [1,3] while list = [1,2,3] , target = 2', () => {
        const list = arrayToLinkedList([1,2,3]);
        const resolvedList = removeNthFromEnd(list, 2)
        expect(linkedListToArray(resolvedList)).to.eql([1,3])
    });

});
    
