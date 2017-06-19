"use strict";
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    var recorMap = {};
    if (!nums || !nums.length) {
        return 0;
    }
    var depthCounter = 0;
    var max = Number.MIN_SAFE_INTEGER;
    var lastIndex = nums.length - 1;
    for (var i = 0; i < nums.length; i++) {
        var k = i;
        while (!recorMap[k] && k <= lastIndex) {
            recorMap[k] = true;
            k = nums[k];
            depthCounter++;
        }
        max = Math.max(max, depthCounter);
        depthCounter = 0;
    }
    return max;
};
exports.arrayNesting = arrayNesting;
