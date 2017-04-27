/**
 * @param {number[]} nums
 * @return {number}
 */
"use strict";
var missingNumber = function (nums) {
    var max = nums.length;
    var expectSum = max * (max + 1) / 2;
    var actualSum = nums.reduce(function (prevSum, cur) {
        return prevSum + cur;
    }, 0);
    return expectSum - actualSum;
};
exports.missingNumber = missingNumber;
