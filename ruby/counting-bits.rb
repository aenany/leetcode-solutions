# @param {Integer} num
# @return {Integer[]}

def count_bits(num)
	i = 0
	z = []
	while i <= num
		x = i
		z.push(x.to_s(2).each_char.map(&:to_i).inject(0){|sum,item| sum + item})
		i+=1
	end	
	p z
end

count_bits(4)