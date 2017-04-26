/**
 * @param {number[]} prices
 * @return {number}
 */

type IPrices = number[];
type TBuyPrice = number;
type TSellPrice = number;
type IBuySellPair = [TBuyPrice, TSellPrice];

enum Trend {
    up,
    down
}

const maxProfit = function (prices: IPrices): number {
    let i = 0;
    const len = prices.length;
    const buySellPairs: IBuySellPair[] = [];
    let profit = 0;
    let trend = Trend.down;
    if (len <= 1) {
        return profit;
    }

    if (prices[1] >= prices[0]) {
        trend = Trend.up;
        buySellPairs.push([prices[0]] as IBuySellPair);
    } else {
        trend = Trend.down;
    }
    i = 1;

    while (i < len) {
        if (isValley(prices, i, trend)) {
            const buyPrice = prices[i];
            const buySellPair = [buyPrice] as IBuySellPair;
            buySellPairs.push(buySellPair);
            trend = Trend.up;
        } else if (isPeek(prices, i, trend)) {
            const lastPair = last(buySellPairs);
            if (lastPair) {
                const sellPrice = prices[i];
                lastPair.push(sellPrice);
            }
            trend = Trend.down;
        }
        i++;
    }

    buySellPairs.forEach(pair => {
        if (pair.length === 2) {
            profit += pair[1] - pair[0];
        }
    });
    return profit;
};

function last<T>(array: T[]): T {
    return array[array.length - 1];
}

function isValley(prices: IPrices, position: number, trend: Trend): boolean {
    const len = prices.length;
    if (trend === Trend.down) {
        const nextPrice = position + 1 > len - 1 ? undefined : prices[position + 1];
        const currentPrice = prices[position];
        if (nextPrice && nextPrice > currentPrice) {
            return true;
        }
    }
    return false;
}

function isPeek(prices: IPrices, position: number, trend: Trend): boolean {
    const len = prices.length;
    if (trend === Trend.up) {
        const nextPrice = position + 1 > len - 1 ? undefined : prices[position + 1];
        const currentPrice = prices[position];
        if (nextPrice === undefined || nextPrice < currentPrice) {
            return true;
        }
    }
    return false;
}


const maxProfit2 = function (prices: IPrices): number {
    let profit = 0;
    if (prices.length <= 1) {
        return profit;
    }
    let i = 1;
    const len = prices.length;

    while (i < len) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
        i++;
    }
    return profit;
};


export {
    maxProfit,
    maxProfit2
};