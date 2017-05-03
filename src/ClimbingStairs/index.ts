/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n: number): number {

    if (!n){
        return 0;
    }

    const result: number[]  = [1, 1];

    for (let i = 2; i <= n; i++){
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];

};

export {
    climbStairs
};