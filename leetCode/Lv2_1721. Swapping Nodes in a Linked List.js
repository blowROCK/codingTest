// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

;/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let first = head;
  let second = head;
  let firstNode = head;
  for(let i = 0; i < k - 1; i++) {
    first = first.next
  }
  firstNode = first;
  while(first.next){
    first = first.next;
    second = second.next;
  }
  let temp = firstNode.val;
  firstNode.val = second.val;
  second.val = temp;
  return head;
};