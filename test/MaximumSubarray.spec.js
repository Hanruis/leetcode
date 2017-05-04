var {expect} = require('chai')
var {maxSubArray, maxSubArray2} = require("../src/MaximumSubarray")



describe('MaximumSubarray:maxSubArray', () => {
   
   it('should be 0 while array = []', () => {
       expect(maxSubArray(0)).to.eq(0)
   });

   it('should be 0 while array = null', () => {
       expect(maxSubArray(0)).to.eq(0)
   });

   it('should be -1 while array = [-1]', () => {
       expect(maxSubArray([-1])).to.eq(-1)
   });

   it('should be -1 while array = [-1, -2]', () => {
       expect(maxSubArray([-1, -2])).to.eq(-1)
   });

   it('should be 6 while array = [-2,1,-3,4,-1,2,1,-5,4]', () => {
       expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).to.eq(6)
   });
        
});

describe('MaximumSubarray:maxSubArray2', () => {
   
   it('should be 0 while array = []', () => {
       expect(maxSubArray2(0)).to.eq(0)
   });

   it('should be 0 while array = null', () => {
       expect(maxSubArray2(0)).to.eq(0)
   });

   it('should be -1 while array = [-1]', () => {
       expect(maxSubArray2([-1])).to.eq(-1)
   });

   it('should be -1 while array = [-1, -2]', () => {
       expect(maxSubArray2([-1, -2])).to.eq(-1)
   });

   it('should be 6 while array = [-2,1,-3,4,-1,2,1,-5,4]', () => {
       expect(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4])).to.eq(6)
   });
        
});
    