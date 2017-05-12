var {expect} = require('chai')
var {sortColors} = require("../src/SortColors")



describe('SortColors:sortColors', () => {
    
    it('should be [] while []', () => {
        const array = []
        sortColors(array)
        expect(array).to.eql([])
    });

    it('should be [0] while [0]', () => {
        const array = [0]
        sortColors(array)
        expect(array).to.eql([0])
    });

    it('should be [0,1,2] while [2,1,0]', () => {
        const array = [2,1,0]
        sortColors(array)
        expect(array).to.eql([0,1,2])
    });

    it('should be [0,1,1] while  [1,1,0]', () => {
        const array = [1,1,0]
        sortColors(array)
        expect(array).to.eql([0,1,1])
    });

    it('should be [0,1,2] while  [1,2,0]', () => {
        const array = [1,2,0]
        sortColors(array)
        expect(array).to.eql([0,1,2])
    });

    it('should be [0,1,2] while  [0,2,1]', () => {
        const array = [0,2,1]
        sortColors(array)
        expect(array).to.eql([0,1,2])
    });

});
    