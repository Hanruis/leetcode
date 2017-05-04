/**
 * @param {number[]} nums
 * @return {number}
 */
"use strict";
// 这个方法是 O(n2)
var maxSubArray = function (nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    var sumMaxtri = [[]];
    var maxSum = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < nums.length; i++) {
        sumMaxtri[0][i] = (sumMaxtri[0][i - 1] || 0) + nums[i];
        maxSum = Math.max(sumMaxtri[0][i], maxSum);
    }
    for (var i = 1; i < nums.length; i++) {
        sumMaxtri[i] = [];
        for (var j = i; j < nums.length; j++) {
            sumMaxtri[i][j] = sumMaxtri[0][j] - sumMaxtri[0][j - i];
            maxSum = Math.max(sumMaxtri[i][j], maxSum);
        }
    }
    return maxSum;
};
exports.maxSubArray = maxSubArray;
// 使用 DP 去思考的话。可以得到 O(n) 的结果
var maxSubArray2 = function (nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    var maxSum = nums[0];
    var dp = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        maxSum = Math.max(dp[i], maxSum);
    }
    return maxSum;
};
exports.maxSubArray2 = maxSubArray2;
