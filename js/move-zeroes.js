/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = nums => {
	let j = 0;
	let temporaryValue;
	for(let i=0; i<nums.length; i++){
		if(nums[i]!==0){
			temporaryValue = nums[j]
			nums[j] = nums[i];
			nums[i] = temporaryValue;
			j++
		}
	}
};