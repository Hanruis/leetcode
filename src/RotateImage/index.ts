/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix: number[][]) {

    const len = matrix.length;
    const mid = Math.ceil(len / 2);
    for (let i = 0; i < mid ; i++){
        const end = len - i - 1;
        for (let j = i; j < end; j++ ){
            let first = matrix[i][j];
            matrix[i][j] = matrix[len - 1 - j][i];
            matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
            matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
            matrix[j][len - 1 - i] = first;
        }
    }
};


export {
    rotate
};