/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var occurences = {};
    var letters, letter, size, max, result;
	result = [];
	var ret = [];
	
	letters = s.split('');
	size = letters.length;
	
//	letters = letters.toString().replace(/\s/g, "");

    for(var i=0; i<size; i++){
		 letter = letters.pop();
		 occurences[letter] = occurences.hasOwnProperty(letter.toString()) ? occurences[letter]+1 : 1;
    }
	
	for(var key in occurences){
		result.push({key: key, val: occurences[key]});
	}
	
	result = result.sort(function(a,b){return b.val -a.val});
	
	for(var i=0; i<result.length; i++){
		for(var j=0; j< result[i].val; j++){
			ret.push(result[i].key);
		}
	}
	
	return ret.join('');
};