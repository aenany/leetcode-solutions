/* 
884. Uncommon Words from Two Sentences
https://leetcode.com/problems/uncommon-words-from-two-sentences/

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.
*/


/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let str = A + ' ' + B + ' ';
    let buf = '';
    const words = [];
    const map = {};
    const uncommon = [];
    
    for(let i = 0; i < str.length; i += 1) {
        let char = str.charAt(i);
        if(char !== ' ') {
            buf += char;
        } else {
            words.push(buf);
            buf = '';
        }
    }
    
    for(i = 0; i < words.length; i += 1) {
        const word = words[i];
        map[word] = map[word] ? map[word] += 1 : 1;
    }
        
    for(const word in map) {
        const count = map[word];
        if(count === 1) {
            uncommon.push(word)
        }
    }
    
    return uncommon;
};