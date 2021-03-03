//Using KMP - Knuth Morris Pratt algorith
//with the time complexiy of O(m + n) and space complexity of O(m)
// faster compared to naive appraoch which has O(mn) in the worst case

function computeLpsTable(pattern, m, lps) {
  let i = 0;
  let j = 1;
  lps[0] = 0;

  while (j < m) {
    if (pattern[j] === pattern[i]) {
      lps[j] = i + 1;
      j++;
      i++;
    } else {
      if (i !== 0) {
        // this part is the main logic
        i = lps[i - 1];
      } else {
        lps[j] = 0;
        j++;
      }
    }
  }
  return lps;
}

function kmpSearch(str, pattern) {
  let n = str.length;
  let m = pattern.length;

  //base case
  if (m === 0) return 0;
  if (n === 0 || m > n) return -1;

  let lps = computeLpsTable(pattern, m, new Array(m).fill(0));
  console.log(lps);

  let i = 0;
  let j = 0;

  while (i < n) {
    if (str[i] === pattern[j]) {
      i += 1;
      j += 1;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
    if (j === m) {
      // j = lps[j-1] to search for other occurences
      return i - j;
    }
  }

  return -1;
}

const res = kmpSearch("aabaaaabaaac", "aabaaac");
console.log(res);
