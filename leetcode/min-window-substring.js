var minWindow = function (s, t) {
  if (s.length === 0 || s.length < t.length) return "";
  // hash table to keep a count of all the distinct characters of t
  const map = {};
  for (char of t) {
    map[char] = ++map[char] || 1;
  }

  let count = t.length; // remaining matching count

  let l = 0;
  let r = 0;

  let start = 0;
  let minLen = Infinity;

  while (r < s.length) {
    if (map[s[r++]]-- > 0) count--;

    while (count === 0) {
      // valid
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }

      if (map[s[l++]]++ === 0) count++; // make it invalid
    }
  }

  return minLen === Infinity ? "" : s.substr(start, minLen);
};

const res = minWindow("a", "a");
console.log(res);
