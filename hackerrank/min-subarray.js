//Minimum sub array using sliding window approach
//Find the minimun length of the subarray that adds up to 9

function minSubArr(arr, target) {
  let minSize = Infinity;
  let sum = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum >= target) {
      minSize = Math.min(minSize, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }
  return minSize;
}

const res = minSubArr([2, 3, 1, 2, 4, 3], 7);
console.log(res);
