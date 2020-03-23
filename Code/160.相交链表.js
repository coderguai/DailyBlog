/**
 *  https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  let curA = headA, curB = headB;
  while (curA !== curB) {
    curA = curA ? curA.next : headB;
    curB = curB ? curB.next : headA;
  }
  return curA;
}