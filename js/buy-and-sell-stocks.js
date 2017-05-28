/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
	var max = Math.max.apply('Math', prices);
	var min = Math.min.apply('Math', prices);
	
	
	
	return max - min;
};