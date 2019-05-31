/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  var currentSolution = this;
  this.init = nums;
    
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    var currentSolution = this;
    return currentSolution.init;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var currentSolution = this;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */