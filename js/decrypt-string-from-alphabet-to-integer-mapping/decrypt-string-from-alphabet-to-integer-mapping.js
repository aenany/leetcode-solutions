/* 1309. Decrypt String from Alphabet to Integer Mapping
https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

    Characters ('a' to 'i') are represented by ('1' to '9') respectively.
    Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 

Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

 

Example 1:

Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:

Input: s = "1326#"
Output: "acz"

Example 3:

Input: s = "25#"
Output: "y"

Example 4:

Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
Output: "abcdefghijklmnopqrstuvwxyz"

 

Constraints:

    1 <= s.length <= 1000
    s[i] only contains digits letters ('0'-'9') and '#' letter.
    s will be valid string such that mapping is always possible.

 */

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
	const map = {
		"1": "a",
		"2": "b",
		"3": "c",
		"4": "d",
		"5": "e",
		"6": "f",
		"7": "g",
		"8": "h",
		"9": "i",
		"10#": "j",
		"11#": "k",
		"12#": "l",
		"13#": "m",
		"14#": "n",
		"15#": "o",
		"16#": "p",
		"17#": "q",
		"18#": "r",
		"19#": "s",
		"23#": "t",
		"21#": "u",
		"22#": "v",
		"23#": "w",
		"24#": "x",
		"25#": "y",
		"26#": "z"
	};
    
	let result = '';

	for (let i = s.length; i >= 0; i--) {
		let c = s.charAt(i);
		let token;

		if (c === '#' && s.charAt(i -2) && s.charAt(i - 1)) {
			token = s.charAt(i - 2) + s.charAt(i - 1) + c;
			result += map[token]
			i -= 2;
			continue;
		} else {
			token = c;
			result += map[token]
		}
	}

	result = (result.replace(/undefined/g, ''));
    return result.split('').reverse().join('');
};