/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	if(num1 == '0' || num2 == '0') {
		return '0';
	}
    if(num1 == '1') {
        return num2;
    }
    if(num2 == '1') {
        return num1;
    }
    
};