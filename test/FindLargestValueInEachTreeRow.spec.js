var {expect} = require('chai')
var {largestValues} = require("../src/FindLargestValueInEachTreeRow")
var {createTreeNode} = require("./utils")

describe('FindLargestValueInEachTreeRow:largestValues', () => {
    
    it(`should be [] while tree be null`, () => {
        expect(largestValues(null)).to.eql([])
    });

    it(`should be [1] while tree be 1`, () => {
        const root = createTreeNode(1);
        expect(largestValues(root)).to.eql([1])
    });

    it(`should be [1, 3] while tree be 
          1
         / \\
        3   2`, () => {
        const tree = createTreeNode(1);
        tree.left = createTreeNode(3);
        tree.right = createTreeNode(2);
        expect(largestValues(tree)).to.eql([1,3])
    });

    it(`should be [1, 3, 9] while tree be 
          1
         / \\
        3   2
       / \\   \\  
      5   3   9 `, () => {
        const tree = createTreeNode(1);
        tree.left = createTreeNode(3);
        tree.right = createTreeNode(2)
        tree.left.left = createTreeNode(5);
        tree.left.right = createTreeNode(3);
        tree.right.right = createTreeNode(9);
        expect(largestValues(tree)).to.eql([1,3,9])
    });

});
    
