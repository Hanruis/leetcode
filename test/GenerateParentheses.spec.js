var {expect} = require('chai')
var {generateParenthesis} = require("../src/GenerateParentheses")



describe('GenerateParentheses:generateParenthesis', () => {
    
    it('should be [] while n = 0', () => {
        expect(generateParenthesis(0)).to.eql([])
    });
        
    
    it('should be [()] while n = 1', () => {
        expect(generateParenthesis(1)).to.eql(['()'])
    });

    it('should be [(()), ()()] while n = 2', () => {
        expect(generateParenthesis(2)).to.eql(['(())','()()'])
    });   
    it('should be ["((()))","(()())","(())()","()(())","()()()"] while n = 3', () => {
        expect(generateParenthesis(3)).to.eql(["((()))","(()())","(())()","()(())","()()()"])
    });   
});
    

