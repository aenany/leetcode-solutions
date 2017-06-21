/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = s => s.split('').reverse().join('').split(' ').reverse().join(' ');