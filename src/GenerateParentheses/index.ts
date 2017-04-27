/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n: number): string[] {
    const result: string[] = [];

    if (!n) {
        return result;
    }

    let leftCounter = n;
    let rightCounter = n;

    function _generate(curString: string, leftC, rightC): void {

        if (!leftC && !rightC) {
            result.push(curString);
            return;
        }
        if (leftC - 1 >= 0 ){
            _generate(curString + '(', leftC - 1, rightC);
        }
        if (leftC <= rightC - 1){
            _generate(curString + ')', leftC, rightC - 1);
        }

    }

    _generate('', leftCounter, rightCounter);
    return result;
};


export {
    generateParenthesis
};