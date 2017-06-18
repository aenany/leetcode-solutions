/**
 * @param {number[]} nums
 * @return {number}
 */

const arrayPairSum = nums => {
	let r = 0;
	nums.sort((a, b) => a - b);
	while ( nums.length > 0) { r += Math.min.apply(null, nums.splice(0, 2)); }
	return r;
};