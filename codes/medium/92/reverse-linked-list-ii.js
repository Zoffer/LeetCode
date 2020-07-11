/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    const dummy = { next: head };
    let node = dummy;
    while (--m && --n) node = node.next;
    let fast = node.next;
    while (--n && fast.next) {
        const insert_node = fast.next;
        fast.next = insert_node.next;
        insert_node.next = node.next;
        node.next = insert_node;
    }
    return dummy.next;
};
// @lc code=end

