/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let result = [];
  const seen = {};

  let i = 0;
  while (i + 10 <= s.length) {
    let str = s.substring(i, i++ + 10);
    if (seen[str] && seen[str] === 1) {
      result.push(str);
    }
    seen[str] = ++seen[str] || 1;
  }
  console.log(seen);
  return result;
};

const res = findRepeatedDnaSequences("AAAAAAAAAAAAA");
console.log(res);
