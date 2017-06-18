/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (words) {
	return words.filter(function (w) {
		return (!/^[qwertyuiop]*$/i.test(w) && !/^[asdfghjkl]*$/i.test(w) && !/^[zxcvbnm]*$/i.test(w)) ? false : true;
	});
};