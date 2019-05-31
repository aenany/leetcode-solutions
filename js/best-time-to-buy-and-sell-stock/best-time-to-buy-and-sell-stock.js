/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {    
        var mxCurr = 0, mxTot = 0;
        for(var i = 1; i < prices.length; i++) {
            mxCurr = Math.max(0, mxCurr += prices[i] - prices[i-1]);
            mxTot = Math.max(mxCurr, mxTot);
        }
        return mxTot;
};
