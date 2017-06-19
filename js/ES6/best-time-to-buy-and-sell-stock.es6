/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
	let mxCurr = 0;
	let mxTot = 0;
	for (let i = 1; i < prices.length; i++) {
		mxCurr = Math.max(0, mxCurr += prices[i] - prices[i - 1]);
		mxTot = Math.max(mxCurr, mxTot);
	}
	return mxTot;
};