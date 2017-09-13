/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var s = {};

var encode = function(longUrl) {
    var l = Math.random().toString(36).substr(2,9);
    s[l] = longUrl;
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