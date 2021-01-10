function twoCharacters(str) {
  //edge case
  if (str.length <= 1) return 0;
  //get all the distinct characters from a provided string
  let s = [...new Set(str.split(""))];
  let result = [];
  let max = -Infinity;

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      result.push(s[i] + s[j]);
    }
  }
  for (let char of result) {
    let subset = str.replace(
      new RegExp("[^" + char[0] + "" + char[1] + "]", "gi"),
      ""
    );
    if (isAlternating(subset)) {
      if (subset.length > max) {
        max = subset.length;
      }
    }
  }

  return max > 0 ? max : 0;
}

function isAlternating(s) {
  for (let i = 0; i < s.length - 2; i++) {
    if (s.charAt(i) !== s.charAt(i + 2) || s.charAt(i) === s.charAt(i + 1))
      return false;
  }
  return true;
}

const res = twoCharacters("abaacdabd");
console.log(res);
