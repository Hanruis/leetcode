var {expect} = require('chai')
var {rotate} = require("../src/RotateImage")


describe.only('RotateImage:rotate', () => {
    
    it(`should be [[1]] while [[1]]`, () => {

        const matrix = [[1]]
        rotate(matrix)
        expect(matrix).to.eql([[1]])
    });

    it(`should be 
        [
            [3,1],
            [4,2]
        ]
        while 
        [
             [1,2], 
             [3,4]
        ]`, () => {

        const matrix = [
             [1,2], 
             [3,4]
        ]
        rotate(matrix)
        expect(matrix).to.eql([
            [3,1],
            [4,2]
        ])
    });

    it(`should be 
        [
             [7,4,1], 
             [8,5,2],
             [9,6,3],
        ]
        while 
        [
             [1,2,3], 
             [4,5,6],
             [7,8,9],
        ]`, () => {

        const matrix = [
             [1,2,3], 
             [4,5,6],
             [7,8,9],
        ]
        rotate(matrix)
        expect(matrix).to.eql([
             [7,4,1], 
             [8,5,2],
             [9,6,3],
        ])
    });


});
    
