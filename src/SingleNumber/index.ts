/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function(nums: number[]): number {
    if (!nums.length) {
        return undefined;
    }
    let num;
    nums.forEach(number => {
        if (typeof num === 'undefined') {
            num = number;
        } else {
            num = num ^ number;
        }
    });
    return num;
};
export {
    singleNumber
};
