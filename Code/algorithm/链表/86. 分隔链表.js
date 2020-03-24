/**
 * https://leetcode-cn.com/problems/partition-list/
 */
var partition = function(head, x) {
  if (!head) return null;
  // 分割为两个链表
  let headL = new ListNode(0);
  let tailL = headL;
  let headR = new ListNode(0);
  let tailR = headR;
  while (head) {
    if (head.val < x) { // 左边
      tailL.next = head;
      tailL = head;
    } else { // 右边
      tailR.next = head;
      tailR = head;
    }
    head = head.next;
  }

  tailR.next = null;
  tailL.next = headR.next;
  return headL.next;
}