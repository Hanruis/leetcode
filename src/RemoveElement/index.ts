/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val): number {
    // 快慢指针
    let i = 0;
    let j = 0;
    const len = nums.length;
    while (i < len) {
        if (nums[i] === val){
            i++;
        }else{
            nums[j] = nums[i];
            i++;
            j++;
        }
    }
    nums.splice(j, i - j);
    return nums.length;
};

export {
    removeElement
};