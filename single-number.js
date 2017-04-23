/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {    
    var duplicatesCount = {};    

    nums.forEach(function(value, index, array){
        duplicatesCount[value] = (duplicatesCount[value] || 0) + 1;
    });

    for(var key in duplicatesCount){
        if(duplicatesCount[key] > 1){
            delete duplicatesCount[key];
        }
    }

    return parseInt(Object.keys(duplicatesCount)[0]);

};