function longestSubstring(s) {
  if (s.length === 0) return 0;
  let start = 0;
  let end = 0;
  let max = -Infinity;
  const store = {};
  let ans = "";

  while (end < s.length && start < s.length) {
    console.log(start)
    console.log(end)
    if (!store[s[end]]) {
      store[s[end]] = 1;
      let size = end - start + 1;
      if (size > max) {
        max = size;
        ans = s.substring(start, end + 1);
      }
      end++;
    } else {
      store[s[start]]--;
      start++;
    }
    console.log(store)
  }
  console.log(store);
  console.log(ans);
  return max;
}

const res = longestSubstring("abcabcbb");
console.log(res);

const s = { a: 0 }
console.log(s['a'])

//longest substring without repeating characters
