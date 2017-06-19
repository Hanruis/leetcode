var {expect} = require('chai')
var { topKFrequent} = require("../src/TopKFrequentElements")


describe('TopKFrequentElements:topKFrequent', () => {
    it('should be [1,2] while [1,1,1,2,2,3]', () => {
        expect(topKFrequent([1,1,1,2,2,3], 2)).to.eql([1,2])
    });


    it('should be [1] while [1,1,1]', () => {
        expect(topKFrequent([1,1,1], 2)).to.eql([1])
    }); 

    it('should be [] while [1,1,1,2,2,3], k = 5', () => {
        expect(topKFrequent([1,1,1], 5)).to.eql([])
    }); 
    it('should be [] while [], k = 5', () => {
        expect(topKFrequent([], 5)).to.eql([])
    });       
    it('should be [] while [1,2], k = 2', () => {
        expect(topKFrequent([1,2], 2)).to.eql([])
    });       
});
    
