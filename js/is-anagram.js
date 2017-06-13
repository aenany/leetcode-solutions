/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	var cS = {};	
	var cT = {};
	s.split('').sort().forEach(function(e) { (cS[e]) ? cS[e] += 1 : cS[e] = 1; });
	t.split('').sort().forEach(function(e) { (cT[e]) ? cT[e] += 1 : cT[e] = 1; });
	return JSON.stringify(cS) === JSON.stringify(cT) ? true : false;
};