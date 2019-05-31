# Read from the file words.txt and output the word frequency list to stdout.
sed -e 's/[^[:alpha:]]/ /g' words.txt | tr '\n' " " |  tr -s " " | tr " " '\n'| tr 'A-Z' 'a-z' | sort | uniq -c | sort -nr | awk '{print $2" "$1}'
