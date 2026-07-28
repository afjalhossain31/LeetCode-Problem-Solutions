// Given a string s, return the longest palindromic substring in s.
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {

    if (s.length < 2) return s; // If the string has less than 2 characters, it is already a palindrome

    let start = 0;
    let maxLen = 1;
    function expand(left, right) {
        // Check if the characters at those positions are equal and within the bounds of the string
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }
        // Calculate the length of the palindrome found by expanding around the center
        let length = right - left - 1;
        if (length > maxLen) {
            maxLen = length;
            start = left + 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);      
        expand(i, i + 1);
    }

    return s.substring(start, start + maxLen);
};
console.log(longestPalindrome("babad")); 
console.log(longestPalindrome("cbbd")); 
console.log(longestPalindrome("racecar")); 
console.log(longestPalindrome("abba abba abbbbba")); 