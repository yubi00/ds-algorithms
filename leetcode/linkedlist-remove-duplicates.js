/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Given sorted linked list, remove duplicates with a linear comlexity and with constant space
var deleteDuplicates = function (head) {
  let curr = head;
  let next;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      next = curr.next.next;
      if (next === null) {
        curr.next = null;
        break;
      }
      curr.next = next;
    }

    if (curr.val !== curr.next.val) {
      curr = curr.next;
    }
  }

  return head;
};

// this approach works in all cases for eg: [1,1,1,2,2,3,3,3]
