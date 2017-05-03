var {expect} = require('chai')
var {postorderTraversal} = require("../src/BinaryTreePostorderTraversal")
var {createTreeNode} = require("./utils")


describe('BinaryTreePostorderTraversal:postorderTraversal', () => {
    
    it('should be [] while tree = null', () => {
        expect(postorderTraversal(null)).to.eql([])
    });
        
    
    it('should be [2,3,1] while tree.val=1, tree.left = 2, tree.right = 3', () => {
        const root = createTreeNode(1);
        root.left = createTreeNode(2);
        root.right = createTreeNode(3);
        expect(postorderTraversal(root)).to.eql([2,3,1])
    });
        

    it('should be [3,1] while tree.val=1, tree.left = null, tree.right = 3', () => {
        const root = createTreeNode(1);
        root.right = createTreeNode(3);
        expect(postorderTraversal(root)).to.eql([3,1])
    });

    it('should be [3,2,1] while tree.val=1, tree.left = null, tree.right = 2, tree.right.left = 3', () => {
        const root = createTreeNode(1);
        root.right = createTreeNode(2);
        root.right.left = createTreeNode(3)
        expect(postorderTraversal(root)).to.eql([3,2,1])
    });
});
    