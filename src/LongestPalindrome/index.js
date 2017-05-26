"use strict";
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var hash = {};
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (!hash[char]) {
            hash[char] = 1;
        }
        else {
            hash[char] += 1;
        }
    }
    var keys = Object.keys(hash);
    var hasOdd = 0;
    keys.forEach(function (key) {
        var charCount = hash[key];
        if (charCount % 2 === 0) {
            count += charCount;
        }
        else {
            hasOdd = 1;
            count += (charCount - 1);
        }
    });
    count += hasOdd;
    return count;
};
exports.longestPalindrome = longestPalindrome;
