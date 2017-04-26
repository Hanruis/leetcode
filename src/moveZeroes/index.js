"use strict";
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var i = 0;
    var zeroesCounter = 0;
    var len = nums.length;
    while (i < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            zeroesCounter++;
        }
        else {
            i++;
        }
    }
    while (zeroesCounter > 0) {
        zeroesCounter--;
        nums.push(0);
    }
};
exports.moveZeroes = moveZeroes;
var moveZeroes2 = function (nums) {
    var i = 0;
    var j = 0;
    var len = nums.length;
    while (i < len) {
        if (nums[i] === 0) {
            i++;
        }
        else {
            nums[j] = nums[i];
            i++;
            j++;
        }
    }
    while (j < len) {
        nums[j] = 0;
        j++;
    }
};
exports.moveZeroes2 = moveZeroes2;
