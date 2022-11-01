//find the min number of integers need to make the given array consecutive
//using O(nlogn) time complexity
function consecutiveArr(arr) {
  arr.sort();
  if (arr.length === 1) return 0;
  let res = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      res += arr[i + 1] - arr[i] - 1;
    }
  }

  return res;
}

console.log(consecutiveArr([4, 8, 6]));

//better way using mathematical calculation with a time complexity of O(n)
function consecutive(arr) {
  if (arr.length < 2) return 0;

  let min, max;

  min = Math.min(...arr);
  max = Math.max(...arr);

  return max - min + 1 - arr.length;
}

console.log(consecutive([4, 5, 8, 7, 6]));
