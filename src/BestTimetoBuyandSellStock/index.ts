/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices: number[]): number {
    let max = 0;
    let min = prices[1];
    let len = prices.length;
    for (let i = 1; i < len; i++) {
        let price = prices[i];
        if (price < min){
            min = price;
            continue;
        }else{
            max = Math.max(max, price - min);
        }
    }

    return max;
};

export {
    maxProfit
};