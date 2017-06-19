/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 可以用桶排，直接一个 hashMap 来处理，然后 counter 一下就好。
// 这里用数组自带的排序，然后 counter 来实现。
const topKFrequent = function(nums: number[], k: number): number[] {
    nums.sort((a, b) => {
        if (a < b){
            return -1;
        }else if (a > b){
            return 1;
        }else{
            return 0;
        }
    });
    let counter = 0;
    let j = 0;
    let i = 0;
    let len = nums.length;
    const result: number[] = [];

    while (j < len) {
        if (nums[i] === nums[j]){
            counter++;
            j++;
        }else{
            if (counter >= k){
                result.push(nums[i]);
            }
            counter = 0;
            i = j;
        }
    }

    if (counter >= k){
        result.push(nums[i]);
    }

    return result;
};

export {
    topKFrequent
};