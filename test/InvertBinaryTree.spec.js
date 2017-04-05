var {expect}  = require('chai');
var InvertBinaryTree = require('../src/InvertBinaryTree');


describe('InvertBinaryTree', function() {
    
    it('should return null while node = null', () => {
        expect(InvertBinaryTree(null)).to.equal(null)
    });
    it('should inverTreeA', () => {
        const left = {
            val:2,
            left:null,
            right:null
        }
        const node = {
            val:1,
            left,
            right:null
        }
        InvertBinaryTree(node)
        expect(node.left).to.eql(null)
        expect(node.right).to.eql(left)
    });      

});
    