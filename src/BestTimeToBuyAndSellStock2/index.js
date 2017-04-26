/**
 * @param {number[]} prices
 * @return {number}
 */
"use strict";
var Trend;
(function (Trend) {
    Trend[Trend["up"] = 0] = "up";
    Trend[Trend["down"] = 1] = "down";
})(Trend || (Trend = {}));
var maxProfit = function (prices) {
    var i = 0;
    var len = prices.length;
    var buySellPairs = [];
    var profit = 0;
    var trend = Trend.down;
    if (len <= 1) {
        return profit;
    }
    if (prices[1] >= prices[0]) {
        trend = Trend.up;
        buySellPairs.push([prices[0]]);
    }
    else {
        trend = Trend.down;
    }
    i = 1;
    while (i < len) {
        if (isValley(prices, i, trend)) {
            var buyPrice = prices[i];
            var buySellPair = [buyPrice];
            buySellPairs.push(buySellPair);
            trend = Trend.up;
        }
        else if (isPeek(prices, i, trend)) {
            var lastPair = last(buySellPairs);
            if (lastPair) {
                var sellPrice = prices[i];
                lastPair.push(sellPrice);
            }
            trend = Trend.down;
        }
        i++;
    }
    buySellPairs.forEach(function (pair) {
        if (pair.length === 2) {
            profit += pair[1] - pair[0];
        }
    });
    return profit;
};
exports.maxProfit = maxProfit;
function last(array) {
    return array[array.length - 1];
}
function isValley(prices, position, trend) {
    var len = prices.length;
    if (trend === Trend.down) {
        var nextPrice = position + 1 > len - 1 ? undefined : prices[position + 1];
        var currentPrice = prices[position];
        if (nextPrice && nextPrice > currentPrice) {
            return true;
        }
    }
    return false;
}
function isPeek(prices, position, trend) {
    var len = prices.length;
    if (trend === Trend.up) {
        var nextPrice = position + 1 > len - 1 ? undefined : prices[position + 1];
        var currentPrice = prices[position];
        if (nextPrice === undefined || nextPrice < currentPrice) {
            return true;
        }
    }
    return false;
}
var maxProfit2 = function (prices) {
    var profit = 0;
    if (prices.length <= 1) {
        return profit;
    }
    var i = 1;
    var len = prices.length;
    while (i < len) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
        i++;
    }
    return profit;
};
exports.maxProfit2 = maxProfit2;
