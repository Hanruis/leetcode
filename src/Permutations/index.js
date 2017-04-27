"use strict";
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var result = [];
    function _permute(remainNums, targetNums) {
        if (!remainNums.length) {
            result.push(targetNums);
            return;
        }
        remainNums.forEach(function (num, index) {
            var cloneTargetNums = targetNums.slice(0);
            var cloneRemainNums = remainNums.slice(0);
            cloneTargetNums.push(cloneRemainNums.splice(index, 1)[0]);
            _permute(cloneRemainNums, cloneTargetNums);
        });
    }
    _permute(nums, []);
    return result;
};
exports.permute = permute;
