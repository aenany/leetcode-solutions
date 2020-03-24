/* 
1160. Find Words That Can Be Formed by Characters
https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.
 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

 

Note:

    1 <= words.length <= 1000
    1 <= words[i].length, chars.length <= 100
    All strings contain lowercase English letters only.
 */


/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
	let sum = 0;

	let charCount = {};
	chars.split('').forEach((s) => {
		charCount[s] ? charCount[s]++ : charCount[s] = 1;
	});

	for (let i = 0; i < words.length; i += 1) {
		let word = words[i];
		let good = false;

		let wordCount = {};
		word.split('').forEach((s) => {
			wordCount[s] ? wordCount[s]++ : wordCount[s] = 1;
		});

		for (letter in wordCount) {
			let wordLetterCount = wordCount[letter];
			let charLetterCount = charCount[letter];

			if (wordLetterCount <= charLetterCount) {
				good = true
			} else {
				good = false;
				break;
			}
		}

		if (good === true) {
			sum += word.length;
		}

	}

	return sum;

};