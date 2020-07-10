/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    const tmpHead = new ListNode(-1);
    tmpHead.next = head;
    let lastNode = tmpHead;
    let node = head;
    while (node !== null) {
        const val = node.val;
        if (node.next && node.next.val === val) {
            while (node && node.val === val) node = node.next;
            lastNode.next = node;
        } else {
            lastNode = node;
            node = node.next;
        }
    }
    return tmpHead.next;
};
// @lc code=end

