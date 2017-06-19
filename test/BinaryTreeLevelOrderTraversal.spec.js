var {expect} = require('chai')
var {levelOrder} = require("../src/BinaryTreeLevelOrderTraversal")
var {createTreeNode} = require("./utils")

describe('BinaryTreeLevelOrderTraversal:levelOrder', () => {
    
    it(`should be 
        [
            [3],
            [9,20],
            [15,7]
        ]
    while tree
         3
        / \\
        9  20
         /  \\
        15   7
    `, () => {
        const tree = createTreeNode(3);
        tree.left = createTreeNode(9);
        tree.right = createTreeNode(20);
        tree.right.left = createTreeNode(15);
        tree.right.right = createTreeNode(7)
        expect(levelOrder(tree)).to.eql([
            [3],
            [9,20],
            [15,7]
        ])
    });

    it(`should be [[]] while tree = null`, () => {
        expect(levelOrder(null)).to.eql([])
    });

    it(`should be 
        [
            [3],
            [9,20]
        ]
    while tree
         3
        / \\
        9  20
    `, () => {
        const tree = createTreeNode(3);
        tree.left = createTreeNode(9);
        tree.right = createTreeNode(20);
        expect(levelOrder(tree)).to.eql([
            [3],
            [9,20]
        ])
    });

});
    