var {expect} = require('chai')
var {removeElement} = require("../src/RemoveElement")


describe('RemoveElement:removeElement', () => {
    
    it('should be 0 while [], 0', () => {
        expect(removeElement([], 0)).to.eql(0)
    });

    it('should be 1 while [1], 0', () => {
        expect(removeElement([1], 0)).to.eql(1)
    });

    it('should be 0 while [1], 1', () => {
        expect(removeElement([1], 1)).to.eql(0)
    });

    it('should be 2 while [3,2,2,3], 2', () => {
        expect(removeElement([3,2,2,3], 2)).to.eql(2)
    });
});
    
