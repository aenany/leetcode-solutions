/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

Number.prototype.bin32 = function () {
	var result = this.toString(2);
	while (result.length < 32) {
		result = '0' + result;
	}
	return result;
}

var reverseBits = function (n) {
	return parseInt(n.bin32().split('').reverse().join(''), 2);
};