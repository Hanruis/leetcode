/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
"use strict";
// 类似快慢指针。
// 或者使用桶排也行。
// 不建议用计数器统计 0，1，2  的个数，然后再设置回去。这样遇到 object 的话就 GG 了
var sortColors = function (nums) {
    var redPointer = 0;
    var bluePointer = nums.length - 1;
    for (var i = 0; i <= bluePointer; i++) {
        while (nums[i] === 2 /* blue */ && i < bluePointer) {
            swap(i, bluePointer);
            bluePointer--;
        }
        while (nums[i] === 0 /* red */ && redPointer < i) {
            swap(i, redPointer);
            redPointer++;
        }
    }
    function swap(i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};
exports.sortColors = sortColors;
