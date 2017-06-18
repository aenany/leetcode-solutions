/**
 * @param {number} num
 * @return {number}
 */

const findComplement = num => {
	if (num < 0) {
		return
	} else {
		const binary = (num >>> 0).toString(2).split('');
		let numberComplement = binary.map(bit => {
			bit = (bit == '0' ? '1' : '0');
			return bit;
		});
		numberComplement = parseInt(numberComplement.join(''), 2);
		return numberComplement;
	}
};