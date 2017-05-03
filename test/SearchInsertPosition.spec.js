var {expect} = require('chai')
var {searchInsert} = require("../src/SearchInsertPosition")



describe('SearchInsertPosition:searchInsert', () => {
    
    it('should be 2 while [1,3,5,6], 5', () => {
        expect(searchInsert([1,3,5,6], 5)).to.eq(2)
    });
    it('should be 2 while [1,3,5,6], 2', () => {
        expect(searchInsert([1,3,5,6], 2)).to.eq(1)
    });
    it('should be 2 while [1,3,5,6], 7', () => {
        expect(searchInsert([1,3,5,6], 7)).to.eq(4)
    });
    it('should be 2 while [1,3,5,6], 0', () => {
        expect(searchInsert([1,3,5,6], 0)).to.eq(0)
    });
    it('should be 2 while [1,3], 4', () => {
        expect(searchInsert([1,3], 4)).to.eq(2)
    });

});
    