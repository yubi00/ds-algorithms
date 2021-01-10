function commonChild(s1, s2) {
  const store1 = {};
  const store2 = {};
  let count = 0;

  for (let char of s1.toLowerCase()) {
    store1[char] = ++store1[char] || 1;
  }

  for (let char of s2.toLowerCase()) {
    store2[char] = ++store2[char] || 1;
  }

  for (key in store1) {
    if (store1[key] && store2[key]) {
      count += Math.min(store1[key], store2[key]);
    }
  }
  return count;
}
//Uses Longest common subsequece pattern with bottoms up dynamic programming
function commonChild2(s1, s2) {
  let arr = [Array(s2.length + 1).fill(0)];
  [...s1].forEach((v1, i) => {
    arr[i + 1] = [0];
    [...s2].forEach((v2, j) => {
      arr[i + 1][j + 1] =
        v1 === v2 ? arr[i][j] + 1 : Math.max(arr[i + 1][j], arr[i][j + 1]);
    });
  });

  return arr[s2.length][s1.length];
}

const res = commonChild2("SHINCHAN", "NOHARAAA");
console.log(res);
