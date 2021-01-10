//Maximum sub array using Kadanes's algorithm

function maxSumSubArr(arr) {
  let maxSum = arr[0];
  let currentSum = 0;
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = s;
      end = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      s = i + 1;
    }
  }
  console.log(start, end);
  return maxSum;
}

const res = maxSumSubArr([1, 3, -2, 3, 1, -4, -3, 5, 8]);
console.log(res);
