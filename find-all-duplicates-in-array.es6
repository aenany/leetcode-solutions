/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
const findDuplicates = nums => {
    const duplicateCount = {};
    const duplicatesArray = [];
    nums.forEach((currentValue, index, array) => { duplicateCount[currentValue] = (duplicateCount[currentValue] || 0) + 1; });
    for( const key in duplicateCount){ if(duplicateCount[key] <= 1){ delete duplicateCount[key]; } }
    Object.keys(duplicateCount).forEach(item => { duplicatesArray.push(parseInt(item)); })
    return duplicatesArray;
};