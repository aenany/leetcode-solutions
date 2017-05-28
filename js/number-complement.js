/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {    
    if(num < 0){
        return
    } else {
        var binary = (num >>> 0).toString(2).split('');
        var numberComplement = binary.map(function(bit){
            bit = (bit == '0' ? '1' : '0');
            return bit;        
        });        
        numberComplement = parseInt(numberComplement.join(''), 2);
        return numberComplement;
    }
};