/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
    let x = 0;
    let y = nums.length - 1;

    while (x <= y) {
        let mid = Math.floor((x + y) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            x = mid + 1;
        } else {
            y = mid - 1;
        }
    }
    return x;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));