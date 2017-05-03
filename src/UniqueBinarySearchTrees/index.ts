/**
 * @param {number} n
 * @return {number}
 */

const numTrees = function(n: number): number {
    const G = [1, 1];

    // 这个题目让我终于有点觉得 DP 的本质并不是缓存计算结果。
    // 缓存计算结果只是 DP 的一个结果，而不是因为可以缓存所以是 DP。
    // DP 描述的是一类问题的特征。
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            G[i] = G[i] || 0;
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
};




export {
    numTrees
};