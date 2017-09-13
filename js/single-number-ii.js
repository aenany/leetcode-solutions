/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {    
    var d = {};    
    nums.forEach(function(v, i, a) { d[v] = (d[v] || 0) + 1; });
    for(var k in d) { if(d[k] > 1) { delete d[k]; }}
    return parseInt(Object.keys(d)[0]);
};