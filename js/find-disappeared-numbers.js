/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = [];
    nums.sort(function(a, b){return a - b});    
    for(var i=1; i <= nums[nums.length-1]; i++){ result.push(i); }
    return result.filter(function(e){ nums.indexOf(e) < 0; });
};