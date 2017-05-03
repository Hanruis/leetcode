var {expect} = require('chai')
var {climbStairs} = require("../src/ClimbingStairs")



describe('ClimbingStairs:climbStairs', () => {
    
    it('should be 1 while n = 0', () => {
        expect(climbStairs(1)).to.eq(1)
    });

    it('should be 1 while n = 1', () => {
        expect(climbStairs(1)).to.eq(1)
    });

    it('should be 2 while n = 2', () => {
        expect(climbStairs(2)).to.eq(2)
    }); 

    it('should be 3 while n = 3', () => {
        expect(climbStairs(3)).to.eq(3)
    });   

    it('should be 5 while n = 4', () => {
        expect(climbStairs(4)).to.eq(5)
    });   
    it('should be 8 while n = 5', () => {
        expect(climbStairs(5)).to.eq(8)
    });  
});
    