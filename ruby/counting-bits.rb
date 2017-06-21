# @param {Integer} num
# @return {Integer[]}

def count_bits(num)
	i=0
	x=[]
	while i <= num
		x.push(i.to_s(2).count('1'))
		i+=1
	end
	return x
end