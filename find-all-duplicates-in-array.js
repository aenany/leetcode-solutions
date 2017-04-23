/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var duplicateCount = {};
    var duplicatesArray = [];

    nums.forEach(function(currentValue, index, array){        
            duplicateCount[currentValue] = (duplicateCount[currentValue] || 0) + 1;        
    });
    
    for(var key in duplicateCount){
        if(duplicateCount[key] <= 1){
            delete duplicateCount[key];
        }
    }

    Object.keys(duplicateCount).forEach(function(item){
        duplicatesArray.push(parseInt(item));
    })

    return duplicatesArray;
};