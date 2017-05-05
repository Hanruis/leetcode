/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// 类似快慢指针。
// 或者使用桶排也行。
// 不建议用计数器统计 0，1，2  的个数，然后再设置回去。这样遇到 object 的话就 GG 了
const sortColors = function(nums: number[]): void {
    const enum Color {
        red,
        white,
        blue
    }

    let redPointer = 0;
    let bluePointer = nums.length - 1;

    for (let i = 0; i <= bluePointer; i++){
        while (nums[i] === Color.blue && i < bluePointer) {
            swap(i, bluePointer);
            bluePointer--;
        }
        while (nums[i] === Color.red && redPointer < i){
            swap(i, redPointer);
            redPointer++;
        }
    }

    function swap(i, j) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

};


export {
    sortColors
};