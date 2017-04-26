var {expect} = require('chai')
var {isSameTree} = require("../src/SameTree")
var { createTreeNode } = require("./utils")

describe('SameTree:isSameTree', () => {
    
    it('should be true while source === null , target === null', () => {
        expect(isSameTree(null,null)).to.eq(true)
    });
        
    
    it('should be false while source === null, target === TreeNode', () => {
        const targetTree = createTreeNode(1)
        expect(isSameTree(null, targetTree)).to.eq(false)
    });

    
    it('should be true while source === TreeNode , target === TreeNode', () => {
        const source = createTreeNode(1)
        const target = createTreeNode(1)
        expect(isSameTree(source, target)).to.eq(true)
    });

    
    it('should be false while source.left !=== target.left', () => {
        const source = createTreeNode(1);
        source.left = createTreeNode(1)
        const target = createTreeNode(1)
        target.left = createTreeNode(2)
        expect(isSameTree(source, target))
    });
        
});

