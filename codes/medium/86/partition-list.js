/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const head_small = { next: null }, head_big = { next: null };
    let small = head_small, big = head_big;
    for (let node = head; node !== null; node = node.next) {
        if (node.val < x) {
            small = small.next = node;
        } else {
            big = big.next = node;
        }
    }
    small.next = head_big.next;
    big.next = null;
    return head_small.next;
};
// @lc code=end

