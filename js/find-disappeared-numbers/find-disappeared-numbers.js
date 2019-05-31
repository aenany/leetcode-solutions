/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
	var result = [];

	if (nums.length == 2 && nums[0] != nums[1]) {
	
		result = [nums[1]+1]; 
		return result; 
	}

	if (nums.length == 1 ) { result = [nums[0]]; return result; }
	if (nums.length == 0 ) { result = nums; return result; }

	else {
		nums.sort(function(a, b){return a - b;});    
		for(var i=1; i <= nums[nums.length-1]; i++){ result.push(i); }
		return result.filter(function(e){ return !nums.includes(e); });    
	}
};