// Write a fn that takes in a targetSum and an array of nos as args
// and should return an array containing any combn of
// elements that add up to exactly the targetsum.
// if not found, then return null

//Time complexity - O(n^m * m)
// space complexity - O(m)
function bruteHowSum(targetSum, nums) {
  //base cases
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    const remainder = targetSum - num;
    const result = bruteHowSum(remainder, nums);
    if (result !== null) {
      return [...result, num];
    }
  }
  return null;
}

function howSum(targetSum, nums, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    const remainder = targetSum - num;
    const result = howSum(remainder, nums, memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

function tabHowSum(targetSum, nums) {
  const table = Array(targetSum + 1).fill(null);

  //target sum of 0 can be obtained by taking no elements from the nums array
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
}

console.log(tabHowSum(5, [2, 3]));
console.log(tabHowSum(7, [5, 3, 4, 7]));
console.log(tabHowSum(7, [2, 4]));
console.log(tabHowSum(8, [2, 3, 5]));
console.log(tabHowSum(300, [7, 14, 100]));

// Time complexity: O(n*m*m)
// space complexity: O(m*m)
