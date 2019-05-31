# valid-phone-numbers.sh

# first valid regex \d{3}-\d{3}-\d{4}
# second valid regex [(]\d{3}[)] \d{3}-\d{4}
# combined (^\d{3}-\d{3}-\d{4}$|^[(]\d{3}[)] \d{3}-\d{4}$)

grep -P "(^\d{3}-\d{3}-\d{4}$|^[(]\d{3}[)] \d{3}-\d{4}$)" file.txt
