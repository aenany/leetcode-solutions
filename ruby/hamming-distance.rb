# @param {Integer} x
# @param {Integer} y
# @return {Integer}

def hamming_distance(x, y)
	return (x^y).to_s(2).each_char.map(&:to_i).inject(0){|sum,item| sum + item}
end