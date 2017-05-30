/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
	if(x === 0) { return 0; }
	if(x === 1) { return 1; }
	var g = x / 2.0;
	var sqrt = function guessCalculation(x, g){
		var d = x / g;
		var ng = (d + g) / 2.0;
		if ( g == ng ) { return g; }
		return sqrt(x, ng);		
	};
	return sqrt(x, g);
};