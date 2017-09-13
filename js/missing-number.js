/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	var currentIndex;
    for(var i = 0 ; i < nums.length; i++){
		if(nums[i] == 0){
			continue;
		}
		
		currentIndex = nums[i];
		
		if(nums[i+1] - currentIndex == 1 && currentIndex - nums[i-1] == 1){
			continue;
		} else {
			console.log('uh oh')
		}
		
	}
};