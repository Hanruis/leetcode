var {expect} = require('chai')
var {swapPairs} = require("../src/SwapNodesInPairs")
var {arrayToLinkedList, linkedListToArray} = require("./utils")


describe('SwapNodesInPairs:swapPairs', () => {
    
    it('should be [] while null', () => {
        expect(swapPairs(null)).to.eql(null)
    });

    it('should be [0] while [0]', () => {
        const list = arrayToLinkedList([0])
        expect(linkedListToArray(swapPairs(list))).to.eql([0])
    });

    it('should be [1,0] while [0,1]', () => {
        const list = arrayToLinkedList([0,1])
        expect(linkedListToArray(swapPairs(list))).to.eql([1,0])
    });

    it('should be [1,0,2] while [0,1,2]', () => {
        const list = arrayToLinkedList([0,1,2])
        expect(linkedListToArray(swapPairs(list))).to.eql([1,0,2])
    });

    it('should be [1,0,3,2] while [0,1,2,3]', () => {
        const list = arrayToLinkedList([0,1,2,3])
        expect(linkedListToArray(swapPairs(list))).to.eql([1,0,3,2])
    });

});
    
