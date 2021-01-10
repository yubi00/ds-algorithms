function sherlockAnagrams(s) {
  let store = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let subs = s
        .substring(i, j + 1)
        .split("")
        .sort()
        .join("");
      store[subs] = ++store[subs] || 1;
    }
  }
  let count = 0;
  for (let key in store) {
    count += (store[key] * (store[key] - 1)) / 2;
  }
  return count;
}
const res = sherlockAnagrams("cdcd");
console.log(res);
