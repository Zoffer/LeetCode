/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let total = len1 + len2;
    let mid1 = Math.floor(len1 / 2);
    let mid2 = Math.floor(total / 2 - mid1);
    let m = Math.ceil(Math.min(len1, len2) / 2);
    let n = -m;
    let sum, offset, i1, a1, b1, i2, a2, b2, left, right;
    let i = 0;
    while (m >= n) {
        i++;
        sum = (m + n) / 2;
        offset = sum < 0 ? Math.floor(sum) : Math.ceil(sum);
        i1 = mid1 + offset;
        a1 = nums1[i1 - 1];
        b1 = nums1[i1];
        i2 = mid2 - offset;
        a2 = nums2[i2 - 1];
        b2 = nums2[i2];
        left = a1 == null ? a2 : a2 == null ? a1 : a1 > a2 ? a1 : a2;
        right = b1 == null ? b2 : b2 == null ? b1 : b1 < b2 ? b1 : b2;
        if (left == null || left <= right) {
            if (total % 2 == 0) {
                return (left + right) / 2;
            } else {
                return right;
            }
        } else if (b1 < a2) {
            n = offset;
        } else {
            m = offset;
        }
    }
};
// @lc code=end
export default findMedianSortedArrays;
