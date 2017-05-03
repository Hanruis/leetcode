"use strict";
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (!n) {
        return 0;
    }
    var result = [1, 1];
    for (var i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
};
exports.climbStairs = climbStairs;
