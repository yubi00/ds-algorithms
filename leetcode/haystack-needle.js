// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
//Naive string searching algorithm using two pointers approach with a
// Time complexity of O(n) in best case when there is no first matching letter and O(nm) or O(m* (n-m+1)) in worst case and a constant space
// where n is the length of the haystack and m is the length of the needle
let strStr = function (haystack, needle) {
  //handling edge cases
  const haystack_length = haystack.length;
  const needle_length = needle.length;

  if (needle === "") return 0;
  if (needle_length > haystack_length) return -1;

  let index = -1;

  let i = 0;
  let j = 0;

  while (i <= haystack_length - needle_length) {
    //check for pattern match
    while (j < needle_length) {
      if (haystack[i + j] !== needle[j]) {
        j = 0;
        break;
      }
      j++;
    }
    if (j === needle.length) {
      index = i;
      break;
    }
    i++;
  }

  return index;
};

const res = strStr("hello", "ll");
console.log(res);
