/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    var r = [];
    for (var i=0, c=0; i <= num; c=0, i++) {        
        ((i >>> 0).toString(2).split('').forEach(function (e) { e == '1' ? c += 1 : c }));
        r.push(c);
    }
    return r;
};