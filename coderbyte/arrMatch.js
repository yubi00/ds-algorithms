function arrMatch(strArr) {
  const numArr = strArr.map((num) => JSON.parse(num));
  let first = numArr[0];
  let second = numArr[1];

  let result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i] + second[i]);
  }

  return result.join("-");
}

const res = arrMatch(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]);
console.log(res);
