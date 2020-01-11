/* 1221. Split a String in Balanced Strings
https://leetcode.com/problems/split-a-string-in-balanced-strings/

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Example 4:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

 

Constraints:

    1 <= s.length <= 1000
    s[i] = 'L' or 'R'


 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	var sbts = 0;
	var map = {
		R: 0,
		L: 0
	};

	for (var i = 0; i < s.length; i += 1) {
		var c = s.charAt(i);
		c === 'R' ? map['R'] += 1 : map['L'] += 1;

		if (map['R'] === map['L']) {
			map = {
				R: 0,
				L: 0
			};
			
			sbts += 1;
		}
	}

	return sbts;
};