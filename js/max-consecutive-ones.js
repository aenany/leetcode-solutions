/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
	nums = nums.join('').split('0').map(function (e) {
		return e.length;
	});
	return Math.max.apply(null, nums);
};