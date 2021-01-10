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
var findIntersection = function (head) {
  let slow = head; // jumps one node at a time
  let fast = head; //this node jumps two node at a time

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return slow;
    }
  }

  return null;
};

var detectCycle = function (head) {
  if (head === null) return null;

  let intersection = findIntersection(head);
  if (intersection === null) return null;
  let start = head;

  while (start !== intersection) {
    start = start.next;
    intersection = intersection.next;
  }
  return start;
};
