# @param {Integer} num
# @return {Integer}

def find_complement(num)
	x = []
	for item in num.to_s(2).split('')		
		x.push((item == '0' ? '1' : '0'))
	end 	
	return x.join('').to_i(2)
end