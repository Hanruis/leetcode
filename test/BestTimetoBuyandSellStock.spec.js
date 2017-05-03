var {expect} = require('chai')
var {maxProfit} = require("../src/BestTimeToBuyAndSellStock")



describe('BestTimeToBuyAndSellStock:maxProfit', () => {
    
    it('should be 0 while prices = []', () => {
        expect(maxProfit([])).to.eq(0)
    });
    
    
    it('should be 0 while prices.length = 1', () => {
        expect(maxProfit([1])).to.eq(0)
    });
    
    
    it('should be 5 while prices = [7, 1, 5, 3, 6, 4]', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).to.eq(5)
    });


    it('should be 0 while prices = [7,  5, 3, 2, 1]', () => {
        expect(maxProfit([7,  5, 3, 2, 1])).to.eq(0)
    });


    it('should be 8 while prices = [1,5, 2, 9]', () => {
        expect(maxProfit([1,5, 2, 9])).to.eq(7)
    });
    
    it('should be 7 while prices = [10,12, 2, 9]', () => {
        expect(maxProfit([10,12, 2, 9])).to.eq(7)
    });

});
    
