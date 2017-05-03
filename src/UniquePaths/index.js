/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
"use strict";
// 典型的 dp 问题。
// 注意，这里通过分析，其实发现是可以在常数的空间范围内实现这个算法，而不必 O(m*n) 的空间。
var uniquePaths = function (m, n) {
    var map = Object.create(null);
    map['1-1'] = 1;
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (!map[i + "-" + j]) {
                map[i + "-" + j] = 0;
                if (i > 1) {
                    map[i + "-" + j] += map[i - 1 + "-" + j];
                }
                if (j > 1) {
                    map[i + "-" + j] += map[i + "-" + (j - 1)];
                }
            }
        }
    }
    return map[m + "-" + n];
};
exports.uniquePaths = uniquePaths;
