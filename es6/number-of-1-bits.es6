/**
 * @param {number} n - a positive integer
 * @return {number}
 */

const hammingWeight = n => n === 0 ? 0 : (n % 2) + hammingWeight(~~(n / 2));