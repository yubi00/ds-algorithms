function findIntersection(arr) {
  let numArr = arr.map((num) => JSON.parse("[" + num + "]"));
  let result = [];

  for (let i = 0; i < numArr[0].length; i++) {
    for (let j = 0; j < numArr[1].length; j++) {
      if (numArr[0][i] == numArr[1][j]) {
        result.push(numArr[0][i]);
      }
    }
  }

  return result ? result.join(",") : "false";
}

const res = findIntersection(["1,3,4,7,13", "1,2,4,13,15"]);
console.log(res);

//Better approach of big  O of O(n)
function findIntersectionII(strArr) {
  let first = strArr[0].split(",");
  let second = strArr[1].split(",");
  let result = [];

  let i = 0;
  let j = 0;
  while (i < first.length && j < second.length) {
    let first_no = parseInt(first[i]);
    let second_no = parseInt(second[j]);
    if (first_no === second_no) {
      result.push(first_no);
      i++;
      j++;
    } else {
      if (first_no > second_no) {
        j++;
      } else {
        i++;
      }
    }
  }

  return result ? result.join(",") : "false";
}

const betterRes = findIntersectionII(["1,3,4,7,13", "1,2,4,13,15"]);
console.log(betterRes);
