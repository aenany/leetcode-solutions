/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function moveZeroes(nums) {
	var j = 0;
	var temporaryValue = void 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			temporaryValue = nums[j];
			nums[j] = nums[i];
			nums[i] = temporaryValue;
			j++;
		}
	}
};