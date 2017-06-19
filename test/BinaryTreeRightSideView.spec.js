var {expect} = require('chai')
var {rightSideView} = require("../src/BinaryTreeRightSideView")
var {createTreeNode} = require("./utils")

describe.only('BinaryTreeRightSideView:rightSideView', () => {
    
    it(`should be [1,3,4] while tree =  
          1              <---
        /   \\
        2     3          <---
        \\     \\
         5       4       <---
    `, () => {
        const tree = createTreeNode(1);
        tree.left = createTreeNode(2);
        tree.left.right =  createTreeNode(5);
        tree.right = createTreeNode(3);
        tree.right.right = createTreeNode(4);
        expect(rightSideView(tree)).to.eql([1,3,4])
    });

    it(`should be [1,3,5] while tree =  
          1              <---
        /   \\
        2     3          <---
        \\    
         5               <---
    `, () => {
        const tree = createTreeNode(1);
        tree.left = createTreeNode(2);
        tree.left.right =  createTreeNode(5);
        tree.right = createTreeNode(3);
        expect(rightSideView(tree)).to.eql([1,3,5])
    });


    it(`should be [1,2,5] while tree =  
          1              <---
        /   
        2                <---
        \\    
         5               <---
    `, () => {
        const tree = createTreeNode(1);
        tree.left = createTreeNode(2);
        tree.left.right =  createTreeNode(5);
        expect(rightSideView(tree)).to.eql([1,2,5])
    });

    it(`should be [1,2] while tree =  
          1              <---
        /   
        2                <---
    `, () => {
        const tree = createTreeNode(1);
        tree.left = createTreeNode(2);
        expect(rightSideView(tree)).to.eql([1,2])
    });

    it(`should be [1] while tree =  1 <--- `, () => {
        const tree = createTreeNode(1);
        expect(rightSideView(tree)).to.eql([1])
    });

    it(`should be [] while tree =  null `, () => {
        const tree = createTreeNode(1);
        expect(rightSideView(tree)).to.eql([1])
    });

});
    