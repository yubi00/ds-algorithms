//Brute force approach is to find all the sub array and and compare sum including each number in the
// array
function bruteMaxSumArr(nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    max = Math.max(temp, max);
    for (let j = i + 1; j < nums.length; j++) {
      temp += nums[j];
      max = Math.max(temp, max);
    }
  }
  return max;
}

//Maximum sub array using Kadanes's algorithm with a time complexity of Big O of O(n)
// and space complexity of O(1)
// Kadane algorithm states that the the max sum in any position is equal to the number in that position itself or the
// sum of that number plus the last calculated max sum

function maxSumSubArr(nums) {
  //initialization
  let max = nums[0];
  let current_max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current_max = Math.max(nums[i], current_max + nums[i]);
    if (current_max > max) {
      max = current_max;
    }
  }

  return max;
}

function dpMaxSubArr(nums) {
  let dp = [];
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  return Math.max(...dp);
}

const res = dpMaxSubArr([1, 3, -2, 3, 1, 8, -4, -3, 5]);
console.log(res);
