/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var cache = {};

var encode = function(longUrl) {
    var tiny = Math.random().toString(36).slice(4);
    s[tiny] = longUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

var decode = function(shortUrl) {
    for (l in s) {
        if(l == shortUrl){
            return s[l];
        }
    }
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */