/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s: string): number {
    const hash = {};
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!hash[char]){
            hash[char] = 1;
        }else{
            hash[char] += 1;
        }
    }
    const keys = Object.keys(hash);
    let hasOdd = 0;
    keys.forEach((key) => {
        let charCount = hash[key];
        if (charCount % 2 === 0){
            count += charCount;
        }else{
            hasOdd = 1;
            count += (charCount - 1);
        }
    });

    count += hasOdd;
    return count;
};

export {
    longestPalindrome
};