// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. 

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;

    if (dividend === MIN && divisor === -1) {
        return MAX;
    }
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let ans = 0;

    while (a >= b) {

        let temp = b;
        let multiple = 1;

        while (a >= temp + temp) {
            temp += temp;
            multiple += multiple;
        }
        a -= temp;
        ans += multiple;
    }
    return sign * ans;
};
console.log(divide(10, 3));
console.log(divide(7, -3));