// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let nums = nums1.concat(nums2); // Combine the two arrays into one
    nums.sort((a, b) => a - b); // Sort the combined array in ascending order

    let mid = Math.floor(nums.length / 2); // Find the middle index of the sorted array

    if (nums.length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2;
    }
    return nums[mid];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

