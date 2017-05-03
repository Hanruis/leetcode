/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums: number[], target: number): number {

    let begin = 0;
    let end = nums.length - 1;
    let mid = Math.ceil((begin + end) / 2);

    while (true){
        let midNum = nums[mid];
        if (begin === end){
            if (target > nums[end]){
                return end + 1;
            }else{
                return end;
            }
        }

        if (midNum === target){
            return mid;
        }else if (midNum > target){
            end = mid - 1;
        }else{
            begin = mid;
        }
        mid = Math.ceil((begin + end) / 2);
    }


};

export {
    searchInsert
};