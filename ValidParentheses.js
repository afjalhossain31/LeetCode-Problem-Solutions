// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));