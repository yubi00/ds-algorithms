// find the longest sustring of k unique characters
// using sliding window technique, we can acheive this
// Time complexity - O(N^2)

function longestSubstr(s, k) {
  const store = {};
  let start = 0;
  let end = 0;
  let max = -Infinity;
  let ans = "";

  while (end < s.length && start < s.length) {
    let substr = s.substring(start, end + 1);
    if (isValid(substr, k)) {
      store[s[end]] = ++store[s[end]] || 1;
      if (end - start + 1 > max) {
        max = end - start + 1;
        ans = s.substring(start, end + 1);
      }
      end++;
    } else {
      store[s[start]]--;
      start++;
    }
  }
  console.log(store);
  return ans;
}

function isValid(s, k) {
  const store = {};
  for (let char of s) {
    store[char] = ++store[char] || 1;
  }
  return Object.keys(store).length <= k ? true : false;
}

const res = longestSubstr("karappa", 2);
console.log(res);
