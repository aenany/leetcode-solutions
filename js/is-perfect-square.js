/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    function sqrt(n, g) {
        if (!g) { g = n / 2.0; }
        var d = n / g;              
        var ng = (d + g) / 2.0;     
        if (g == ng) { return g; }    
        return sqrt(n, ng);
    }
    var h = sqrt(num);
    return (h % 1 === 0) && (h*h === num) ? true : false;
};