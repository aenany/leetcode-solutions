/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    return prices.reduce((profit, price, i, prices) => 
        i > 0 && price > prices[i-1] ? profit + price - prices[i-1] : profit, 0);
};
