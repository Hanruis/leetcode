var {expect} = require('chai')
var {rotateRight} = require("../src/RotateList")
var {linkedListToArray, arrayToLinkedList} = require("./utils")

describe.only('RotateList:rotateRight', () => {
    
    it('should be [] while list = [], target = 1', () => {
        const list = arrayToLinkedList([]);
        const resolvedList = rotateRight(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([])
    });

    it('should be [1] while list = [1] , target = 1', () => {
        const list = arrayToLinkedList([1]);
        const resolvedList = rotateRight(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([1])
    });

    it('should be [1] while list = [1] , target = 99', () => {
        const list = arrayToLinkedList([1]);
        const resolvedList = rotateRight(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([1])
    });

    it('should be [2,1] while list = [1,2] , target = 1', () => {
        const list = arrayToLinkedList([1,2]);
        const resolvedList = rotateRight(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([2,1])
    });

    it('should be [1,2] while list = [1,2] , target = 2', () => {
        const list = arrayToLinkedList([1,2]);
        const resolvedList = rotateRight(list, 2)
        expect(linkedListToArray(resolvedList)).to.eql([1,2])
    });

    it('should be [3,1,2] while list = [1,2,3] , target = 1', () => {
        const list = arrayToLinkedList([1,2,3]);
        const resolvedList = rotateRight(list, 1)
        expect(linkedListToArray(resolvedList)).to.eql([3,1,2])
    });

    it('should be [2,3,1] while list = [1,2,3], target = 2', () => {
        const list = arrayToLinkedList([1,2,3]);
        const resolvedList = rotateRight(list, 2)
        expect(linkedListToArray(resolvedList)).to.eql([2,3,1])
    });

    it('should be [1,2,3] while list = [1,2,3], target = 3', () => {
        const list = arrayToLinkedList([1,2,3]);
        const resolvedList = rotateRight(list, 3)
        expect(linkedListToArray(resolvedList)).to.eql([1,2,3])
    });

    it('should be [1,2,3] while list = [1,2,3], target = 10', () => {
        const list = arrayToLinkedList([1,2,3]);
        const resolvedList = rotateRight(list, 10)
        expect(linkedListToArray(resolvedList)).to.eql([3,1,2])
    });

    it('should be [1,2] while list = [1,2], target = 3', () => {
        const list = arrayToLinkedList([1,2]);
        const resolvedList = rotateRight(list, 3)
        expect(linkedListToArray(resolvedList)).to.eql([2,1])
    });

});
    
