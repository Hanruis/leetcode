"use strict";
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n < 0) {
        return false;
    }
    var str = n.toString(2);
    return /^10*$/.test(str);
};
exports.isPowerOfTwo = isPowerOfTwo;
