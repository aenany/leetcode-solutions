/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
        var operationsArray = nums.slice();
        var restoreArray = operationsArray.slice();
        var productsArray = [];
        var product;

        for(var i=0; i<operationsArray.length; i++){
            operationsArray.splice(i,1);
            product = operationsArray.reduce(function(a,b){return a*b;});
            productsArray.push(product);
            operationsArray = restoreArray.slice();
        }

        return productsArray;
};