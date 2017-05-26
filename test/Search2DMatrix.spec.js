var {expect} = require('chai')
var {searchMatrix} = require("../src/Search2DMatrix")



describe(`Search2DMatrix:searchMatrix:[
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ]`, () => {
    
    const matrx = [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ]

    it('should be true while target = 3' , () => {
        expect(searchMatrix(matrx, 3)).to.eql(true)
    });

    it('should be false while target = 2' , () => {
        expect(searchMatrix(matrx, 2)).to.eql(false)
    });

    it('should be false while target = 100' , () => {
        expect(searchMatrix(matrx, 100)).to.eql(false)
    });

    it('should be false while target = -1' , () => {
        expect(searchMatrix(matrx, 100)).to.eql(false)
    });

    it('should be false while target = 20' , () => {
        expect(searchMatrix(matrx, 100)).to.eql(false)
    });

    it('should be false while matrix = [] or [[]]' , () => {
        expect(searchMatrix([], 100)).to.eql(false)
        expect(searchMatrix([[]], 100)).to.eql(false)
    });


    it('should be true while matrix = [[1,3]]  target 1' , () => {
        expect(searchMatrix([[1,3]], 1)).to.eql(true)
    });

    it('should be true while  10' , () => {
        expect(searchMatrix(matrx, 10)).to.eql(true)
    });

    it('should be true while  [[1],[3]] , 0' , () => {
        expect(searchMatrix([[1],[3]], 0)).to.eql(false)
    });

});
    