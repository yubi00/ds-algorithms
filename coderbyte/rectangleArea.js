function distance(coord1, coord2) {
  return Math.floor(
    Math.sqrt(
      Math.pow(coord1[0] - coord2[0], 2) + Math.pow(coord1[1] - coord2[1], 2)
    )
  );
}

function RectangleArea(strArr) {
  const numArr = strArr.map((coord) => coord.match(/\d/g));
  console.log(numArr);

  const width = distance(numArr[0], numArr[1]);
  const height = distance(numArr[1], numArr[2]);
  console.log(width, height);

  return width * height;
}

const res = RectangleArea(["(1 1)", "(1 3)", "(3 1)", "(3 3)"]);
console.log(res);
