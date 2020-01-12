/* 852. Peak Index in a Mountain Array
https://leetcode.com/problems/peak-index-in-a-mountain-array/

Let's call an array A a mountain if the following properties hold:

    A.length >= 3
    There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1

Example 2:

Input: [0,2,1,0]
Output: 1

Note:

    3 <= A.length <= 10000
    0 <= A[i] <= 10^6
    A is a mountain, as defined above.
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {    
    let max = 0;
    let peakIdx = 0;
    
    for(let i = 0; i < A.length; i += 1) {
        let prv = A[i - 1] || 0;
        let cur = A[i] || 0;
        let nxt = A[i + 1] || 0;
        
        if(prv < cur && cur > nxt) {
            if (cur > max) {
                max = cur;
                peakIdx = i;
            }            
        }
    }
    
    return peakIdx;
};