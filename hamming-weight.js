/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var total = 0;
    var result = (n >>> 0).toString(2).split('').forEach(function(bit){(bit == '1') ? total++ : total;
})
    return total;
};