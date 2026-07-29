// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("mississippi", "issip"));