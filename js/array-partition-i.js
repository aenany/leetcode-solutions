/**
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function(nums) {
    var r = 0; 
    nums.sort(function(a, b){return a - b});
    while (nums.length > 0) { r += Math.min.apply(null, nums.splice(0,2)); }
    return r;
};