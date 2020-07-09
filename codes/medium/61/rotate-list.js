/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;
    let list = [];
    for (let node = head; node !== null; node = node.next) {
        list.push(node);
    }
    k %= list.length;
    if (k === 0) return head;
    list[list.length - k - 1].next = null;
    list[list.length - 1].next = head;
    return list[list.length - k];
};
// @lc code=end

