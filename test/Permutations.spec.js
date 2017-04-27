var {expect} = require('chai')
var {permute} = require("../src/Permutations")



describe('Permutations:permute', () => {
    
    it('should be [] while source = []', () => {
        expect(permute([])).to.eql([[]])
    });

    it('should be [1] while source = [1]', () => {
        expect(permute([1])).to.eql([[1]])
    }); 

    it('should be [1,2], [2,1] while source = [1,1]', () => {
        expect(permute([1,2])).to.eql([[1,2],[2,1]])
    }); 

    it('result length should be 6 while sources = [1,2,3]', () => {
        expect(permute([1,2,3]).length).to.eql(6)
    }); 
});
    