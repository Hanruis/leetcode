var {expect} = require('chai')
var {majorityElement} = require("../src/MajorityElement")

describe('MajorityElement:majorityElement', () => {
    
    it('majorityElement should be 9 while array has single ele', () => {
        const nums = [9]
        expect(majorityElement(nums)).to.eq(9)
    });
 
    it('majorityElement should be 9 ', () => {
        const nums = [9,9,9,2,2]
        expect(majorityElement(nums)).to.eq(9)
    });

    
});
