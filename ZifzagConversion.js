/** The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R

*/

var convert = function(s, numRows) {

    if (numRows === 1) 
        return s;
    // If the number of rows is 1
    let rows = new Array(numRows).fill("");

    let currentRow = 0;
    let down = true;

    for (let char of s) {

        rows[currentRow] += char; 

        if (currentRow === 0) {
            down = true;
        } else if (currentRow === numRows - 1) {
            down = false;
        }
        currentRow += down ? 1 : -1;
    }
    // Join all the rows to form the final string
    return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));