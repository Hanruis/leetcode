"use strict";
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var result = [];
    if (!n) {
        return result;
    }
    var leftCounter = n;
    var rightCounter = n;
    function _generate(curString, leftC, rightC) {
        if (!leftC && !rightC) {
            result.push(curString);
            return;
        }
        if (leftC - 1 >= 0) {
            _generate(curString + '(', leftC - 1, rightC);
        }
        if (leftC <= rightC - 1) {
            _generate(curString + ')', leftC, rightC - 1);
        }
    }
    _generate('', leftCounter, rightCounter);
    return result;
};
exports.generateParenthesis = generateParenthesis;
