/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums: number[]) {
    let i = 0;
    let zeroesCounter = 0;
    const len = nums.length;
    while (i < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            zeroesCounter++;
        }else {
            i++;
        }
    }
    while (zeroesCounter > 0 ) {
        zeroesCounter--;
        nums.push(0);
    }
};


const moveZeroes2 = function (nums: number[]): void {
    let i = 0;
    let j = 0;
    const len = nums.length;
    while (i < len) {
        if (nums[i] === 0) {
            i++;
        }else {
            nums[j] = nums[i];
            i++;
            j++;
        }
    }
    while (j < len) {
        nums[j] = 0;
        j++;
    }
};


export {
    moveZeroes,
    moveZeroes2
};