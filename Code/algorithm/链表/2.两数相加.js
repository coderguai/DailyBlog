/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHeader = new ListNode(0);
    let cur = dummyHeader;
    let carry = 0; // 进位数 0 | 1
    while (l1 != null || l2 != null) {
      let val1 = 0;
      let val2 = 0;
      if (l1 != null) {
        val1 = l1.val;
        l1 = l1.next;
      }
      if (l2 != null) {
        val2 = l2.val;
        l2 = l2.next;
      }
      let sum = val1 + val2 + carry;
      carry = parseInt(sum / 10); 
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
    }
    if (carry == 1) {
      cur.next = new ListNode(carry);
    }
    return dummyHeader.next;
};
// @lc code=end

