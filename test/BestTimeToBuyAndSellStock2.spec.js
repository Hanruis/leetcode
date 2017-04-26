var {expect} = require('chai')
var {maxProfit, maxProfit2} = require("../src/BestTimeToBuyAndSellStock2")


describe('BestTimeToBuyAndSellStock2:maxProfit', () => {
    
    it('should 0 while prices [] or [x]', () => {
        const prices1 = []
        expect(maxProfit(prices1)).to.eq(0)
        const prices2 = [1]
        expect(maxProfit(prices2)).to.eq(0)
    });
        
    it('should 0 while prices down all the way', () => {
        const prices = [10,9,8,7,6,5];
        expect(maxProfit(prices)).to.eq(0)
    });

    it('should get correct price while prices up all the way', function() {
        const prices = [1,2,3,4,5,6]
        expect(maxProfit(prices)).to.eq(5)
    });
    
    
    it('should get correct price while prices go up an down', function() {
        const prices = [0, 10, 2, 3, 5]
        expect(maxProfit(prices)).to.eq(13)
    });

    it('should get correct price while prices go up an down', function() {
        const prices = [0,5,5,6,2,1,1,3]
        expect(maxProfit(prices)).to.eq(8)
    });

    it('should get correct price while prices go plain al the way', function() {
        const prices = [2,2]
        expect(maxProfit(prices)).to.eq(0)
    });   
        
});

describe('BestTimeToBuyAndSellStock2:maxProfit2', () => {
    
    it('should 0 while prices [] or [x]', () => {
        const prices1 = []
        expect(maxProfit2(prices1)).to.eq(0)
        const prices2 = [1]
        expect(maxProfit2(prices2)).to.eq(0)
    });
        
    it('should 0 while prices down all the way', () => {
        const prices = [10,9,8,7,6,5];
        expect(maxProfit2(prices)).to.eq(0)
    });

    it('should get correct price while prices up all the way', function() {
        const prices = [1,2,3,4,5,6]
        expect(maxProfit2(prices)).to.eq(5)
    });
    
    
    it('should get correct price while prices go up an down', function() {
        const prices = [0, 10, 2, 3, 5]
        expect(maxProfit2(prices)).to.eq(13)
    });

    it('should get correct price while prices go up an down', function() {
        const prices = [0,5,5,6,2,1,1,3]
        expect(maxProfit2(prices)).to.eq(8)
    });

    it('should get correct price while prices go plain al the way', function() {
        const prices = [2,2]
        expect(maxProfit2(prices)).to.eq(0)
    });   
        
});
    
    