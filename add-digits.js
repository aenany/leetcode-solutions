/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {				
	var digits = [];	
	var digitToAdd;		
	var resultDigits = [];	
	
	num.toString().split('').forEach(function(digit){
		digits.push(parseInt(digit));			
	});
	
	if(digits.length == 1){
		return digits[0];
	} else {			
		if(digits.length > 1){
			var result = 0;
			for(var i = 0; i < digits.length; i++){
				result += digits[i];
			}
			if(result.toString().length > 1){
				return addDigits(result);	
			} else {
				return result;
			}
		} else {
			return result;
		}											
	}	
};