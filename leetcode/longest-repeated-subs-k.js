// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */
//longest substring with at least k repeating characters using Divide and conquer strategy
var longestSubstring = function (s, k) {
  //handling edge cases
  let len = s.length;
  if (len === 0) return 0;
  if (k > len) return 0;
  if (k <= 1) return len;

  return helper(s, k, 0, len);
};

function helper(s, k, start, end) {
  //hash table to store the frequencies of each characters
  const store = {};
  for (let i = start; i < end; i++) {
    store[s[i]] = ++store[s[i]] || 1;
  }

  for (let i = start; i < end; i++) {
    if (store[s[i]] < k) {
      return Math.max(helper(s, k, start, i), helper(s, k, i + 1, end));
    }
  }

  return end - start;
}

const res = longestSubstring("ababbc", 2);
console.log(res);
