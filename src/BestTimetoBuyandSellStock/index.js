"use strict";
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var max = 0;
    var min = prices[1];
    var len = prices.length;
    for (var i = 1; i < len; i++) {
        var price = prices[i];
        if (price < min) {
            min = price;
            continue;
        }
        else {
            max = Math.max(max, price - min);
        }
    }
    return max;
};
exports.maxProfit = maxProfit;
