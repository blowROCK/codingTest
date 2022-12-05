//https://leetcode.com/problems/middle-of-the-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const arr = [];
  let length = 0;
  let list = head;
  while (list) {
    length++;
    arr.push(list);
    list = list.next;
  }
  return arr[Math.floor(length / 2)];
};
