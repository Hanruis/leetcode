"use strict";
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length || matrix[0].length === 0) {
        return false;
    }
    var l = matrix[0].length;
    var h = matrix.length;
    var total = l * h;
    var start = 0;
    var end = total - 1;
    var mid = Math.ceil((start + end) / 2);
    function getEle(cursor) {
        // y --> height; x --> width
        if (cursor < l - 1) {
            return matrix[0][cursor];
        }
        var y = Math.floor(cursor / l);
        var x = cursor % l;
        return matrix[y][x];
    }
    while (start <= end) {
        if (target < getEle(mid)) {
            end = mid - 1;
        }
        else if (target > getEle(mid)) {
            start = mid + 1;
        }
        else {
            return true;
        }
        mid = Math.ceil((start + end) / 2);
    }
    return false;
};
exports.searchMatrix = searchMatrix;
