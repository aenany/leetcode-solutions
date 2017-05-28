/**
 * @param {number[]} nums
 * @return {number[]}
 */

//[1, 2, 1, 3, 2, 5]
var singleNumber = function(nums) {
    // var currentNumber = null;
    // var copy = nums.slice();
    // for(var i=0; i<nums.length; i++){
    //     currentNumber = nums[i];
    //     for(var j=0; j<nums.length; j++){
    //         if(nums[j] == currentNumber){
    //             copy.splice(i,1);
    //             copy.splice(j,1);
    //         }
    //     }
    // }

    var copyOfNums = nums.slice();
    var duplicates = [];
    var currentNumber = null;    

    while(copyOfNums.length > 0){
        for(var i=0; i<copyOfNums.length; i++){
            currentNumber = nums[i];
            
                if(nums.indexOf(currentNumber   ) != -1){
                    copyOfNums.splice(nums[i],1);
                }
            
        }
    }

    // for(var i=0; i<copyOfNums.length; i++){
    //     currentNumber = copyOfNums.pop();
    //     for(j=0; j<copyOfNums.length; j++){
    //         if(copyOfNums[j] == currentNumber){
    //             duplicates.push(copyOfNums[j])
    //         } else {
    //             continue;
    //         }
    //     }
    // }    

    // for(var i=0; i<duplicates.length;i++){
    //     currentNumber = duplicates[i];
    //     for(var j=0; j<nums.length; j++){
    //         if(nums[j] == currentNumber){
    //             nums.splice(j, 1)
    //         } else {
    //             continue;
    //         }
    //     }
    // }    

    return nums;
};