// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const List = new ListNode();
  let current = List;
  let carry = 0;
  while(l1 || l2 || carry){
    current.next = new ListNode();
    current = current.next;
    const value = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = value > 9 ? 1 : 0;
    current.val = value % 10;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return List.next
};