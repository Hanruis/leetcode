var {expect} = require('chai')
var {findMin} = require("../src/FindMinimumInRotatedSortedArray")



describe('FindMinimumInRotatedSortedArray:findMin', () => {
    
    it('should be 0 while array = 4 5 6 7 0 1 2', () => {
        expect(findMin([4,5,6,7,0,1,2])).to.eq(0)
    });

    it('should be 1 while array = 4 5 6 7 1 2', () => {
        expect(findMin([4,5,6,7,1,2])).to.eq(1)
    });

    it('should be 0 while array = 4 5 6 7 0 1 2', () => {
        expect(findMin([4,5,6,7,0,1,2])).to.eq(0)
    });

    it('should be 0 while array = 1 0', () => {
        expect(findMin([1,0])).to.eq(0)
    });

    it('should be 0 while array = 0', () => {
        expect(findMin([0])).to.eq(0)
    });
    it('should be 1 while array = 3 1 2', () => {
        expect(findMin([3,1,2])).to.eq(1)
    });
});
    