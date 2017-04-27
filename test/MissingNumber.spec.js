var {expect} = require('chai')
var {missingNumber} = require("../src/MissingNumber")



describe('MissingNumber:missingNumber', () => {
    
    it('should [1] lack of 0', () => {
        expect(missingNumber([1])).to.eq(0)
    });

    it('should [0,2] lack of 1', () => {
        expect(missingNumber([0,2])).to.eq(1)
    });
         
    it('should [0,1,2,3,4,5,6,8] lack of 7', () => {
        expect(missingNumber([0,1,2,3,4,5,6,8])).to.eq(7)
    });
});
    