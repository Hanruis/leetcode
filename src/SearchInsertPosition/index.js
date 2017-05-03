"use strict";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var begin = 0;
    var end = nums.length - 1;
    var mid = Math.ceil((begin + end) / 2);
    while (true) {
        var midNum = nums[mid];
        if (begin === end) {
            if (target > nums[end]) {
                return end + 1;
            }
            else {
                return end;
            }
        }
        if (midNum === target) {
            return mid;
        }
        else if (midNum > target) {
            end = mid - 1;
        }
        else {
            begin = mid;
        }
        mid = Math.ceil((begin + end) / 2);
    }
};
exports.searchInsert = searchInsert;
