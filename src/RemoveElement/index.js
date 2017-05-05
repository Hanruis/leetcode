"use strict";
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // 快慢指针
    var i = 0;
    var j = 0;
    var len = nums.length;
    while (i < len) {
        if (nums[i] === val) {
            i++;
        }
        else {
            nums[j] = nums[i];
            i++;
            j++;
        }
    }
    nums.splice(j, i - j);
    return nums.length;
};
exports.removeElement = removeElement;
