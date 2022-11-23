// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [];
  while(nums1.length && nums2.length) {
    if(nums1[0] < nums2[0]) {
      arr.push(nums1.shift());
    } else {
      arr.push(nums2.shift());
    }
  }
  arr = [...arr, ...nums1, ...nums2];
  if(arr.length % 2 === 0) {
    return (arr[arr.length/2] + arr[arr.length/2-1]) / 2
  } else {
    return arr[arr.length/2-0.5]
  }
};