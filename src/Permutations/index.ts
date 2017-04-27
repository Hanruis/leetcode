/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums: number[]): number[][] {
    const result = <number[][]>[];

    function _permute(remainNums: number[], targetNums: number[]) {
        if (!remainNums.length) {
            result.push(targetNums);
            return;
        }
        remainNums.forEach((num, index) => {
            const cloneTargetNums = targetNums.slice(0);
            const cloneRemainNums = remainNums.slice(0);
            cloneTargetNums.push(cloneRemainNums.splice(index, 1)[0]);
            _permute(cloneRemainNums, cloneTargetNums);
        });
    }

    _permute(nums, []);

    return result;
};


export {
    permute
};