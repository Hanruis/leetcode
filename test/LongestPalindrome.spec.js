var {expect} = require('chai')
var {longestPalindrome} = require("../src/LongestPalindrome")


describe.only('LongestPalindrome:longestPalindrome', () => {
    
    it('should 0 while str = ""', () => {
        expect(longestPalindrome("")).to.eq(0)
    });


    it('should 1 while str = "a"', () => {
        expect(longestPalindrome("a")).to.eq(1)
    });

    it('should 2 while str = "aa"', () => {
        expect(longestPalindrome("aa")).to.eq(2)
    });

    it('should 3 while str = "aab"', () => {
        expect(longestPalindrome("aab")).to.eq(3)
    });

    it('should 3 while str = "aabc"', () => {
        expect(longestPalindrome("aabc")).to.eq(3)
    });

    it('should 983 while str = "aabc"', () => {
        const str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
        expect(longestPalindrome(str)).to.eq(983)
    });


});
    