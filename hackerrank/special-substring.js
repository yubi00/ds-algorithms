//Naive approach with inefficient algorithm of big O of O(N2)
function naiveSubstrCount(n, s) {
  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      let str = s.slice(i, j);
      let revStr = str.split("").reverse().join("");
      if (str === revStr && [...new Set(str.split(""))].length <= 2) {
        result.push(str);
      }
    }
  }
  return result.length;
}

function substrCount(n, s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    counter++;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j]) {
        if (
          2 * j - i < s.length &&
          s.substring(i, j) === s.substring(j + 1, 2 * j - i + 1)
        ) {
          counter++;
          break;
        } else {
          break;
        }
      } else {
        counter++;
      }
    }
  }
  return counter;
}

const res = substrCount(4, "aaaa");
console.log(res);
