/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    return nums.filter(function(num){return num !== val;}).length;
};