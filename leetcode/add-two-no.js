function ListNode(val) {
  this.val = val === undefined ? 0 : val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let val1 = 0;
    let val2 = 0;
    let sum = 0;

    if (l1 !== null) val1 = l1.val;
    if (l2 !== null) val2 = l2.val;

    sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    current.next = new ListNode(sum);

    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
};
