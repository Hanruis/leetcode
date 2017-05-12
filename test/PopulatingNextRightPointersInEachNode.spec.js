var {expect} = require('chai')
var {connect2,connect} = require("../src/PopulatingNextRightPointersInEachNode")
var {BinaryTree} = require("../src/BinarySearchTree")


describe.only('PopulatingNextRightPointersInEachNode:connect2', () => {
    

    it('should be link correct , root = null', () => {
        expect(()=>{
            connect2(null)
        }).to.not.throw()
    });


    it('should be link correct , root = {}', () => {
        const root = {
            next:null
        }
        connect2(root);
        expect(root.next).to.eql(null);
    });

    it('should be link correct , binaryTree = [10, 11, 5, 6,1]', () => {
        const tree = new BinaryTree([10, 11, 5, 6,1])
        const root = tree.root;
        connect2(root);
        expect(root.next).to.eql(null);
        expect(root.left.next).to.eql(root.right);
        expect(root.right.next).to.eql(null);
        expect(root.left.left.next).to.eql(root.left.right);
        expect(root.left.right.next).to.eql(null)
    });
        
    it('should be link correct , binaryTree = [10, 11]', () => {
        const tree = new BinaryTree([10, 11])
        const root = tree.root;
        connect2(root);
        expect(root.next).to.eql(null);
        expect(root.left).to.eql(null);
        expect(root.right.next).to.eql(null);
    });

    it('should be link correct , binaryTree = [10, 1]', () => {
        const tree = new BinaryTree([10, 1])
        const root = tree.root;
        connect2(root);
        expect(root.next).to.eql(null);
        expect(root.left.next).to.eql(null);
        expect(root.right).to.eql(null);
    });

});
    

describe.only('PopulatingNextRightPointersInEachNode:connect', () => {
    

    it('should be link correct , root = null', () => {
        expect(()=>{
            connect(null)
        }).to.not.throw()
    });


    it('should be link correct , root = {}', () => {
        const root = {
            next:null
        }
        connect(root);
        expect(root.next).to.eql(null);
    });

    it('should be link correct , binaryTree = [10, 15, 11, 17, 5, 1,6]', () => {
        const tree = new BinaryTree([10, 15, 11, 17, 5, 1,6])
        const root = tree.root;
        connect(root);
        expect(root.next).to.eql(null);
        expect(root.left.next).to.eql(root.right);
        expect(root.right.next).to.eql(null);
        expect(root.left.left.next).to.eql(root.left.right);
        expect(root.left.right.next).to.eql(root.right.left);
        expect(root.right.right.next).to.eql(null)
    });
        
    it('should be link correct , binaryTree = [10 , 5 ,11]', () => {
        const tree = new BinaryTree([10,1, 11])
        const root = tree.root;
        connect(root);
        expect(root.next).to.eql(null);
        expect(root.left.next).to.eql(root.right);
        expect(root.right.next).to.eql(null);
    });

});
    