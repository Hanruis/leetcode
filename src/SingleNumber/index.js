/**
 * @param {number[]} nums
 * @return {number}
 */
"use strict";
var singleNumber = function (nums) {
    if (!nums.length) {
        return undefined;
    }
    var num;
    nums.forEach(function (number) {
        if (typeof num === 'undefined') {
            num = number;
        }
        else {
            num = num ^ number;
        }
    });
    return num;
};
exports.singleNumber = singleNumber;
