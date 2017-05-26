var {expect} = require('chai')
var {minDepth} = require("../src/MinimumDepthofBinaryTree")
var { createTreeNode } = require("./utils")


describe.only('MinimumDepthofBinaryTree:minDepth', () => {
    
    it('should 0 while node = null', () => {
        expect(minDepth(null)).to.eq(0)
    });

    it('should 1 while root.left = root.right = null', () => {
        const root = createTreeNode(1);
        expect(minDepth(root)).to.eq(1)
    }); 

    it('should 2 while [ 1,2,null, null, 3, 4, null ]', () => {
        const root = createTreeNode(1);
        root.left = createTreeNode(2);
        root.right = createTreeNode(3);
        root.right.left = createTreeNode(4);
        expect(minDepth(root)).to.eq(2)
    }); 

    it('should 3 while [ 1,2,3, null, 4, 5, null ]', () => {
        const root = createTreeNode(1);
        root.left = createTreeNode(2);
        root.left.left = createTreeNode(3)
        root.right = createTreeNode(4);
        root.right.left = createTreeNode(5);
        expect(minDepth(root)).to.eq(3)
    }); 

});
    