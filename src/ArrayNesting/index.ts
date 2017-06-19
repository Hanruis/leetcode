/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = function(nums: number[]): number {
    const recorMap = {};

    if (!nums || !nums.length){
        return 0;
    }

    let depthCounter = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let lastIndex = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        let k = i;
        while (!recorMap[k] && k <= lastIndex ){
            recorMap[k] = true;
            k = nums[k];
            depthCounter++;
        }
        max = Math.max(max, depthCounter);
        depthCounter = 0;
    }
    return max;
};

export {
    arrayNesting
};