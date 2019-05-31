/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    var pow = 0;
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    } else {
        for (var i = 0; i < n; i++) {
            pow += x * x;
        }
        return pow;
    }
};