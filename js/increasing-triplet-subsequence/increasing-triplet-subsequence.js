/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
	var resultArray = [];
	for (var i = 0; i < nums.length; i++) {

		resultArray.push(nums[i]);

		if (nums[i] < nums[i + 1]) {
			resultArray.push[i + 1];
		}

		if (nums[i + 1] < nums[i + 2]) {
			resultArray.push[i + 2];
		}

		if (i == 2) {
			if (resultArray[0] < resultArray[0 + 1] && resultArray[0 + 1] < resultArray[0 + 2]) {
				return true;
			} else {
				resultArray = [];
				increasingTriplet(nums.shift());
			}
		}
	}

	return false;
};