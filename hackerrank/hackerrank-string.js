function hackerRank(s) {
  let j = 0;
  let word = "hackerrank";
  for (let i = 0; i < s.length && j < word.length; i++) {
    if (word[j] === s[i]) {
      j++;
    }
  }
  console.log(j);
  return j === word.length ? "YES" : "NO";
}

const res = hackerRank("hackerworld");
console.log(res);
