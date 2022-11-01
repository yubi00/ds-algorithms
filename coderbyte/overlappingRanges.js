function overLappingRanges(arr) {
  let first_range = [];
  let second_range = [];

  for (let i = arr[0]; i <= arr[1]; i++) {
    first_range.push(i);
  }

  for (let j = arr[2]; j <= arr[3]; j++) {
    second_range.push(j);
  }

  let overlapping = first_range.filter((num) => second_range.includes(num));
  return overlapping.length >= arr[4] ? "true" : "false";
}

const res = overLappingRanges([1, 8, 2, 4, 4]);
console.log(res);
