function bitwiseOr(strArr) {
  let first = strArr[0];
  let second = strArr[1];
  let result = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === "1" || second[i] === "1") {
      result += "1";
    } else {
      result += "0";
    }
  }

  return result;
}

const res = bitwiseOr(["00011", "01010"]);
console.log(res);
