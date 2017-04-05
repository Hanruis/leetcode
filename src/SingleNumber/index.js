"use strict";
/**
 * @param {number[]} nums
 * @return {number}
 */
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
module.exports = singleNumber;