/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums: number[]): number {

    let begin = 0;
    let end = nums.length - 1;
    let mid = Math.ceil((begin + end) / 2);
    let maxcount = 0;
    while (mid < end){
        if (nums[mid] > nums[end]){
            begin = mid + 1;
        }else if ( nums[mid]  < nums[begin] ){
            end = mid;
        }
        mid = Math.ceil((begin + end) / 2);
        maxcount++;
        if (maxcount > 10){
            break;
        }
    }
    return Math.min(nums[begin], nums[end]);
};

export {
    findMin
};