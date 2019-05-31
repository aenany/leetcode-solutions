/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

function hammingDistance(x, y) {
	return (x ^ y).toString(2).replace(/0/g, '').length;
}