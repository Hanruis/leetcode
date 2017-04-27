/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = function(nums: number[]) {
    const max = nums.length;
    const expectSum = max * (max + 1) / 2;
    const actualSum = nums.reduce((prevSum, cur) => {
        return prevSum + cur;
    }, 0);
    return expectSum - actualSum;
};


export {
    missingNumber
};
