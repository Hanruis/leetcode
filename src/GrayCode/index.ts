/**
 * @param {number} n
 * @return {number[]}
 */

// 这种题目属于找规律了。一些题目是基本功，比如树，链表这些。
const grayCode = function(n: number): number[] {
    const result = <number[]>[];

    result.push(0);

    for (let i = 0; i < n; i++) {
        const highestBit = 1 << i;
        const len = result.length;
        for (let j = len - 1; j >= 0 ; j--){
            result.push(highestBit + result[j]);
        }
    }

    return result;
};


export {
    grayCode
};
