function hackerRank(s) {
  let j = 0;
  let word = "hacker";
  let index = -1;
  for (let i = 0; i < s.length && j < word.length; i++) {
    if (word[j] === s[i]) {
      if (index === -1) {
        index = i;
      }
      j++;
    }
  }
  console.log(index);
  return j === word.length ? "YES" : "NO";
}

const res = hackerRank("applehackerworld");
console.log(res);
