/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//Using Hare and Tortoise algorithm // Floyds cycle detection algorithm
var hasCycle = function (head) {
  let slow = head; // jumps one node at a time
  let fast = head; //this node jumps two node at a time

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
