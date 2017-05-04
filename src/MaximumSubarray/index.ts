/**
 * @param {number[]} nums
 * @return {number}
 */

// 这个方法是 O(n2)
const maxSubArray = function(nums: number[]): number {

    if (!nums || !nums.length){
        return 0;
    }
    if (nums.length === 1){
        return nums[0];
    }

    const sumMaxtri: number[][] = [[]];
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++){
        sumMaxtri[0][i] = (sumMaxtri[0][i - 1] || 0) + nums[i];
        maxSum = Math.max(sumMaxtri[0][i], maxSum);
    }

    for (let i = 1; i < nums.length; i++) {
        sumMaxtri[i] = [];
        for (let j = i; j < nums.length; j++) {
            sumMaxtri[i][j] = sumMaxtri[0][j] - sumMaxtri[0][j - i];
            maxSum = Math.max(sumMaxtri[i][j], maxSum);
        }
    }
    return maxSum;
};

// 使用 DP 去思考的话。可以得到 O(n) 的结果
const maxSubArray2 = function(nums: number[]): number {

    if (!nums || !nums.length){
        return 0;
    }

    let maxSum = nums[0];
    let dp: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++){
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        maxSum = Math.max(dp[i], maxSum);
    }

    return maxSum;
};


export {
    maxSubArray,
    maxSubArray2
};
