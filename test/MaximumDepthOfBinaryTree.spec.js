var {expect}  = require('chai');
var maxDepth = require('../src/MaximumDepthOfBinaryTree');


describe('MaximumDepthOfBinaryTree', function() {
    it('should return 0 while node is null', () => {
        expect(maxDepth(null)).to.equal(0)
    });
    
    it('should return 1 while node exist but left = right = null', function() {
        const node = {
            val:1,
            left:null,
            right:null
        }
        expect(maxDepth(node)).to.equal(1)
    });

    it('should return 2 while node exist ,node.left exist ,but right = null', function() {

        const leftNodeA =  {
            val:1,
            left:null,
            right:null
        }
        const root = {
            val:1,
            left:leftNodeA,
            right:null
        }
        expect(maxDepth(root)).to.equal(2)
    });       

});
    