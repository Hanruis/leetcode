/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums: number[]): number {
    const counterMap: Object = Object.create(null);
    const len = nums.length;
    let majorityEle: any;
    let i = 0;

    while (i < len) {
        let num = nums[i];
        if (!counterMap[num]) {
            counterMap[num] = 1;
        } else {
            counterMap[num] += 1;
        }
        if (counterMap[num] > len >>> 1) {
            majorityEle = num;
            break;
        }
        i++;
    }
    return majorityEle;
};


export {
    majorityElement
};