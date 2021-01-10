function longestCommonPrefix(strs) {
  let prefix = "";
  let str = strs.sort((a, b) => a.length - b.length);
  //edge case
  if (str.length === 0) return prefix;
  for (let c = 0; c < str[0].length; c++) {
    for (let i = 1; i < str.length; i++) {
      if (str[i][c] !== str[0][c]) return prefix;
    }
    prefix += str[0][c];
  }
  return prefix;
}

const res = longestCommonPrefix(["apple", "apps", "apply"]);
console.log(res);
