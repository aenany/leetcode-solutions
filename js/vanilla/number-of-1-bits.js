/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n === 0 ? 0 : (n % 2) + hammingWeight(~~(n / 2));
};
