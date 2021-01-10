/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function (nums) {
  const store = {};
  for (let num of nums) {
    store[num] = ++store[num] || 1;
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!store[i]) {
      return i;
    }
  }
  return -1;
};

function betterMissingNumber(nums) {
  let n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  let currentSum = 0;
  for (let num of nums) {
    currentSum += num;
  }
  return totalSum - currentSum;
}

const res = missingNumber([1, 0, 3]);
console.log(res);

const result = betterMissingNumber([1, 0, 3]);
console.log(result);
