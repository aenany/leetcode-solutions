/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const getSum = (a, b) => ((a & b) != 0) ? getSum(a ^ b, (a & b) << 1) : (a ^ b);