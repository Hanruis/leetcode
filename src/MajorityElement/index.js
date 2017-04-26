"use strict";
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var counterMap = {};
    var len = nums.length;
    var majorityEle;
    var i = 0;
    while (i < len) {
        var num = nums[i];
        if (!counterMap[num]) {
            counterMap[num] = 1;
        }
        else {
            counterMap[num] += 1;
        }
        if (counterMap[num] > len >>> 1) {
            majorityEle = num;
            break;
        }
        i++;
    }
    return majorityEle;
};
exports.majorityElement = majorityElement;
