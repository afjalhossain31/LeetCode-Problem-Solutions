// LetterCombinations.js

var letterCombinations = function (digits) {

    if (digits.length === 0)
        return [];

    const phone = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    let result = [""];
    for (let digit of digits) {

        let temp = [];
        for (let word of result) {
            for (let char of phone[digit]) {
                temp.push(word + char);
            }
        }
        result = temp;
    }
    return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations("2"));