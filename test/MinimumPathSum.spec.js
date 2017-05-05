var {expect} = require('chai')
var {minPathSum} = require("../src/MinimumPathSum")


describe('MinimumPathSum:minPathSum', () => {
    
    it('should be 0 while [[0]]', () => {
        expect(minPathSum([[0]])).to.eql(0)
    });

    it('should be 1 while [[0], [1]]', () => {
        expect(minPathSum([[0],[1]])).to.eql(1)
    });

    it('should be 9 while [[0, 10], [1, 8]]', () => {
        expect(minPathSum([[0, 10], [1, 8]])).to.eql(9)
    });    

    it('should be 6 while [[1,2,5],[3,2,1]]', () => {
        expect(minPathSum([[1,2,5],[3,2,1]])).to.eql(6)
    });    

});
    
