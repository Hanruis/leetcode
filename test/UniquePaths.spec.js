var {expect} = require('chai')
var {uniquePaths} = require("../src/UniquePaths")



describe('UniquePaths:uniquePaths', () => {
    
    it('should be 1 while m = n = 1', () => {
        expect(uniquePaths(1,1)).to.eq(1)
    });
    
    
    it('should be 1 while m = 1 ,n = 2', () => {
        expect(uniquePaths(1, 2)).to.eq(1)
    });
        
    
    it('should be 2 while m = 2 , n = 2', () => {
        expect(uniquePaths(2,2)).to.eq(2)
    });
        
    
    it('should be 3 while m = 2, n = 3', () => {
        expect(uniquePaths(2,3)).to.eq(3)
    });
        
});
    