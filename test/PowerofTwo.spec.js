var {expect} = require('chai')
var {isPowerOfTwo} = require("../src/PowerofTwo")



describe('PowerofTwo:isPowerOfTwo', () => {
    
    it('should be false while n < 0', () => {
        expect(isPowerOfTwo(-1)).to.eq(false)
    });
        
    
    it('should be false while n = 0', () => {
        expect(isPowerOfTwo(0)).to.eq(false)
    });

    
    it('should be true while n = 1', () => {
        expect(isPowerOfTwo(1)).to.eq(true)
    });
        
    
    it('should be true while n = 2', () => {
        expect(isPowerOfTwo(2)).to.eq(true)
    });
        
        
});
    