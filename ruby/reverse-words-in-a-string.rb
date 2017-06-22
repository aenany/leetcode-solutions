# @param {String} s
# @return {String}

def reverse_words(s)
    p s.split('').reverse().join('').split(' ').reverse().join(' ')
end