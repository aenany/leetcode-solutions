/* 709. To Lower Case
https://leetcode.com/problems/to-lower-case/
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"

 */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
	let lower = '';
	
	for (var i = 0; i < str.length; i++) {
		let c = str.charAt(i);
		let code = c.charCodeAt(0);

		if (code >= 65 && code < 97) {
			lower += String.fromCharCode(code + 32);
		} else {
			lower += c;
		}
	}

	return lower;

};