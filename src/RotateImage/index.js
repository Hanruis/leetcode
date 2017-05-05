"use strict";
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var len = matrix.length;
    var mid = Math.ceil(len / 2);
    for (var i = 0; i < mid; i++) {
        var end = len - i - 1;
        for (var j = i; j < end; j++) {
            var first = matrix[i][j];
            matrix[i][j] = matrix[len - 1 - j][i];
            matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
            matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
            matrix[j][len - 1 - i] = first;
        }
    }
};
exports.rotate = rotate;
