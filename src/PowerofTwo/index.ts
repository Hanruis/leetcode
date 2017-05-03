/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {

    if (n < 0){
        return false;
    }
    const str = n.toString(2);

    return /^10*$/.test(str);
};

export {
    isPowerOfTwo
};