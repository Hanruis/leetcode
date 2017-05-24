var {expect} = require('chai')
var {MinStack} = require("../src/MinStack")



describe('MinStack:MinStack', () => {
    
    it('should stack.length be 1 while push 1 ele', () => {
        const stack = Object.create(MinStack).createNew();
        stack.push(1);
        expect(stack._stack.length).to.eql(1);
    });

    it('should min be 1 while push 1,2,3,4', () => {
        const stack = Object.create(MinStack).createNew();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.getMin()).to.eql(1)
    });

    it('should stack.length be 2 while push 1,2 3,pop', () => {
        const stack = Object.create(MinStack).createNew();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.getMin()).to.eql(1)        
        expect(stack.pop()).to.eql(3)
        expect(stack.getMin(1)).to.eql(1)
        expect(stack.top()).to.eql(2)
    });

    it('should getMin always 0 while 0 5 0', () => {
        const stack = Object.create(MinStack).createNew();
        stack.push(0);
        stack.push(5);
        stack.push(0);
        expect(stack.getMin()).to.eql(0);
        stack.pop();
        expect(stack.getMin()).to.eql(0);
        stack.pop();
        expect(stack.getMin()).to.eql(0); 
    });


    it('should getMin be 1 ,2,3 while push 3,2,1', () => {
        const stack = Object.create(MinStack).createNew();
        stack.push(3);
        stack.push(2);
        stack.push(1);
        expect(stack.getMin()).to.eql(1);
        stack.pop();
        expect(stack.getMin()).to.eql(2);
        stack.pop();
        expect(stack.getMin()).to.eql(3); 
    });

});
    