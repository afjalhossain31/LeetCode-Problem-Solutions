var maximalRectangle = function (matrix) {
    if (matrix.length === 0) {
        return 0;
    }

    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === "1") {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        let stack = [-1];

        for (let j = 0; j <= cols; j++) {
            let currentHeight = j === cols ? 0 : heights[j];

            while (
                stack.length > 1 &&
                currentHeight < heights[stack[stack.length - 1]]
            ) {
                let height = heights[stack.pop()];
                let width = j - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(j);
        }
    }
    return maxArea;
};

console.log(maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],  ]));