var {expect} = require('chai')
var {arrayNesting} = require("../src/ArrayNesting")


describe('ArrayNesting:arrayNesting', () => {
    
    it('should 0 while array = []', () => {
        expect(arrayNesting([])).to.eq(0)
    });

    it('should 1 while array = [1]', () => {
        expect(arrayNesting([1])).to.eq(1)
    });

    it('should 1 while array = [0,1,2,3]', () => {
        expect(arrayNesting([0,1,2,3])).to.eq(1)
    });

    it('should 3 while array = [1,2,3]', () => {
        expect(arrayNesting([1,2,3])).to.eq(3)
    });

    it('should 4 while array = [5,4,0,3,1,6,2]', () => {
        expect(arrayNesting([5,4,0,3,1,6,2])).to.eq(4)
    });

    it('should 2 while array = [0,2,1]', () => {
        expect(arrayNesting([0,2,1])).to.eq(2)
    });


});
    