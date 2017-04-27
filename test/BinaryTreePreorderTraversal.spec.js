var {expect} = require('chai')
var {preorderTraversal} = require("../src/BinaryTreePreorderTraversal")
var { createTreeNode } = require("./utils")



describe('BinaryTreePreorderTraversal:preorderTraversal', () => {
    
    it('should be null while root = null', () => {
        expect(preorderTraversal(null)).to.eql([])
    });
        
    
    it('should be [1] while root.val = 1, root.left = root.right = null', () => {
        const root = createTreeNode(1);
        expect(preorderTraversal(root)).to.eql([1]);    
    });

    
    it('should be [1,2,3] while root.val = 1, root.left = 2, root.right = 3', () => {
        const root = createTreeNode(1);
        root.left = createTreeNode(2)
        root.right = createTreeNode(3)
        expect(preorderTraversal(root)).to.eql([1,2,3])
    });
        
    it('should be [1,2,3] while root.val = 1, root.left = null, root.right = 2, root.right.left 3', () => {
        const root = createTreeNode(1);
        root.right = createTreeNode(2);
        root.right.left = createTreeNode(3)
        expect(preorderTraversal(root)).to.eql([1,2,3])
    });

});
    