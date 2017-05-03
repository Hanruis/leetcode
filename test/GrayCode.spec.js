var {expect} = require('chai')
var {grayCode} = require("../src/GrayCode")



describe('GrayCode:grayCode', () => {
    
    it('should be 0 while n = 0', () => {
        expect(grayCode(0)).to.eql([0])
    });

    
    it('should be [0, 1] while n = 1', () => {
        expect(grayCode(1)).to.eql([0, 1])
    });

    
    it('should be [0, 1,3,2] while n = 2', () => {
        expect(grayCode(2)).to.eql([0,1,3,2])
    });
        
        
        

});
    