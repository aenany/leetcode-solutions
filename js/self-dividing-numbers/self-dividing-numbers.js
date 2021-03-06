/* 728. Self Dividing Numbers
https://leetcode.com/problems/self-dividing-numbers/

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:

Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

Note:
The boundaries of each input argument are 1 <= left <= right <= 10000. */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	let res = [];

	function isSelfDividing(num) {
		let str = num + '';
		for (let i = 0; i < str.length; i += 1) {
			let dig = Number(str.charAt(i));
			if (num % dig !== 0) {
				return false;
			}
		}
		return true;
	}

	for (let i = left; i <= right; i += 1) {
		if (i === 1 || isSelfDividing(i)) {
			res.push(i);
		}
	}

	return res;
};