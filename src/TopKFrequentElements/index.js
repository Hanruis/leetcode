/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
"use strict";
// 可以用桶排，直接一个 hashMap 来处理，然后 counter 一下就好。
// 这里用数组自带的排序，然后 counter 来实现。
var topKFrequent = function (nums, k) {
    nums.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    });
    var counter = 0;
    var j = 0;
    var i = 0;
    var len = nums.length;
    var result = [];
    while (j < len) {
        if (nums[i] === nums[j]) {
            counter++;
            j++;
        }
        else {
            if (counter >= k) {
                result.push(nums[i]);
            }
            counter = 0;
            i = j;
        }
    }
    if (counter >= k) {
        result.push(nums[i]);
    }
    return result;
};
exports.topKFrequent = topKFrequent;
