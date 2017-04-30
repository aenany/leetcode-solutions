function hammingDistance(x, y) {
	var binaryOfX, binaryOfY;
	var xPositions = [];
	var yPositions = [];

	if (typeof x === 'number' && typeof y === 'number') {
		binaryOfX = (x >>> 0).toString(2);
		binaryOfY = (y >>> 0).toString(2);
		if (binaryOfX.length !== binaryOfY.length) {
			return;
		} else {
			var result = 0;
			xPositions = JSON.parse('[' + binaryOfX + ']').toString().split('');
			console.log(xPositions);
			yPositions = JSON.parse('[' + binaryOfY + ']').toString().split('');
			console.log(yPositions);

			for (var i = 0; i < xPositions.length; i++) {
				if (xPositions[i] !== yPositions[i]) {
					result++;
				} else {
					continue;
				}
			}
			return result
		}
	} else {
		return;
	}
}