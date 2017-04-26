var {expect}  = require('chai');
var { moveZeroes, moveZeroes2 } = require('../src/MoveZeroes')

describe('moveZeroes', () => {
    
    it('should do nothing while array empty', () => {
        const nums = []
        moveZeroes(nums);
        expect(nums).to.eql([])
    });
    
    
    it('should [0] to equal [0]', () => {
        const nums = [0]
        moveZeroes(nums)
        expect(nums).to.eql([0])
    });
        
    it('should change [0, 1] to [1,0] ', () => {
        const nums = [0,1]
        moveZeroes(nums)
        expect(nums).to.eql([1,0])
    });
        

    it('should change [0, 1, 0] to [1,0, 0] ', () => {
        const nums = [0, 1, 0] 
        moveZeroes(nums)
        expect(nums).to.eql([1,0, 0])
    });

});
    
describe('moveZeroes2', () => {
    
    it('should do nothing while array empty', () => {
        const nums = []
        moveZeroes2(nums);
        expect(nums).to.eql([])
    });
    
    
    it('should [0] to equal [0]', () => {
        const nums = [0]
        moveZeroes2(nums)
        expect(nums).to.eql([0])
    });
        
    it('should change [0, 1] to [1,0] ', () => {
        const nums = [0,1]
        moveZeroes2(nums)
        expect(nums).to.eql([1,0])
    });
        

    it('should change [0, 1, 0] to [1,0, 0] ', () => {
        const nums = [0, 1, 0] 
        moveZeroes2(nums)
        expect(nums).to.eql([1,0, 0])
    });

}); 