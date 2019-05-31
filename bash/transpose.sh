#transpose.sh

numchars=$(head -n 1 file.txt | wc -w)
for((i=1; i<="$numchars"; i++)); do cut -d " " -f"$i" file.txt | paste -s -d" "; done
