var {expect} = require('chai')
var {numTrees} = require("../src/UniqueBinarySearchTrees")



describe('UniqueBinarySearchTrees:numTrees', () => {
    
    it('should be 1 while n = 1', () => {
        expect(numTrees(1)).to.eql(1)
    });
        
    
    it('should be 2 while n = 2', () => {
        expect(numTrees(2)).to.eql(2)
    });

    
    it('should be 5 while n = 3', () => {
        expect(numTrees(3)).to.eql(5)
    });

    it('should be 14 while n = 4', () => {
        expect(numTrees(4)).to.eql(14)
    });

});
    