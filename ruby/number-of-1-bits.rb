# @param {Integer} n, a positive integer
# @return {Integer}

def hamming_weight(n)
    puts n.to_f == 0.0 ? n : (n % 2) + hamming_weight(n/2.0)
end

def loop(n)
	i=0
	while i < 100000000 do
		n = n/2.0
		puts n
		i+=1
	end
end

hamming_weight(11)

# loop(63)