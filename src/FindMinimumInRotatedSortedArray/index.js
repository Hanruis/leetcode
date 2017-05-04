"use strict";
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    var begin = 0;
    var end = nums.length - 1;
    var mid = Math.ceil((begin + end) / 2);
    var maxcount = 0;
    while (mid < end) {
        if (nums[mid] > nums[end]) {
            begin = mid + 1;
        }
        else if (nums[mid] < nums[begin]) {
            end = mid;
        }
        mid = Math.ceil((begin + end) / 2);
        maxcount++;
        if (maxcount > 10) {
            break;
        }
    }
    return Math.min(nums[begin], nums[end]);
};
exports.findMin = findMin;
