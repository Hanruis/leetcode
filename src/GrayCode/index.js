/**
 * @param {number} n
 * @return {number[]}
 */
"use strict";
// 这种题目属于找规律了。一些题目是基本功，比如树，链表这些。
var grayCode = function (n) {
    var result = [];
    result.push(0);
    for (var i = 0; i < n; i++) {
        var highestBit = 1 << i;
        var len = result.length;
        for (var j = len - 1; j >= 0; j--) {
            result.push(highestBit + result[j]);
        }
    }
    return result;
};
exports.grayCode = grayCode;
