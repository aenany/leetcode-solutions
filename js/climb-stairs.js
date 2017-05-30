/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	var a = b = 1;
	while (n--) { a = (b += a) - a; }
	return a;
};