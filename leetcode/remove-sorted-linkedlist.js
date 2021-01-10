function removeDuplicates(head) {
  let prev = new ListNode(-1, head);
  let newHead = prev;
  let curr = head;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      while (curr.next && curr.val == curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
    curr = curr.next;
  }
  return newHead.next;
}

// Recursive approach
var deleteDuplicates = function (head) {
  //check for the empty linked list or single node in a linked list
  if (!head || !head.next) return head;

  let next = head.next;

  if (head.val === next.val) {
    while (next && next.val === head.val) {
      next = next.next;
    }
    return deleteDuplicates(next);
  } else {
    head.next = deleteDuplicates(next);
    return head;
  }
};
