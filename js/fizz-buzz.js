/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
    var result = [],
        str, i = 1;
    while (i <= n) {
        str = "";
        if (i % 3 === 0) str = 'Fizz';
        if (i % 5 === 0) str += 'Buzz';
        if (!str) str += i;
        result.push(str);
        i++;
    }
    return result;
};