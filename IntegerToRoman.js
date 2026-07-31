var intToRoman = function(num) {

    const value = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];
    const symbol = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];
    let result = "";
    for (let i = 0; i < value.length; i++) {

        while (num >= value[i]) {
            result += symbol[i];
            num -= value[i];
        }
    }
    return result;
};

console.log(intToRoman(3749));
console.log(intToRoman(58));  
console.log(intToRoman(1994));