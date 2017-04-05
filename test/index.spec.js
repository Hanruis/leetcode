var {expect}  = require('chai');
var singleNumber = require('../src/SingleNumber');


describe('singleNumber', function() {
    
    it('should find the single one', () => {
        const numbers = [11,2,11];
        expect(singleNumber(numbers)).to.equal(2)
    });
        
});
    