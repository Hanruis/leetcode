/**
 * @param {number[][]} grid
 * @return {number}
 */
"use strict";
// 经典 dp 问题，要做比较多的条件判断。
// 参考一个答案，做一些辅助数组也挺好，避免各种的判断，代码写的很难看
var minPathSum = function (grid) {
    if (!grid[0].length) {
        return 0;
    }
    var dp = [grid[0][0]];
    var height = grid.length;
    var width = grid[0].length;
    for (var i = 1; i < height; i++) {
        dp[i] = grid[i][0] + dp[i - 1];
    }
    for (var i = 1; i < width; i++) {
        dp[0] += grid[0][i];
        for (var j = 1; j < height; j++) {
            dp[j] = grid[j][i] + Math.min(dp[j], dp[j - 1]);
        }
    }
    return dp[height - 1];
};
exports.minPathSum = minPathSum;
