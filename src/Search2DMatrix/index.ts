/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix: number[][], target) {

    if (!matrix.length || matrix[0].length === 0){
        return false;
    }

    const l = matrix[0].length;
    const h = matrix.length;
    const total = l * h;
    let start = 0;
    let end = total - 1;
    let mid = Math.ceil((start + end) / 2);

    function getEle(cursor: number) {
        // y --> height; x --> width

        if ( cursor < l - 1){
            return matrix[0][cursor];
        }
        let y = Math.floor(cursor / l);
        let x = cursor % l ;
        return matrix[y][x];
    }

    while (start <= end){
        if (target < getEle(mid)){
            end = mid - 1;
        }else if ( target > getEle(mid)){
            start = mid + 1;
        }else{
            return true;
        }
        mid = Math.ceil((start + end) / 2);
    }
    return false;
};

export {
    searchMatrix
};