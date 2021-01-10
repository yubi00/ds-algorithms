//Brute force approach
// Time complexity - O(n^m) where n is the length of the array and m is the target sum
// Space complexity O(m), m height of the tree

function canSumBrute(targetSum, numbers) {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) return true;
  }
  return false;
}

function canSum(targetSum, nums, memo = {}) {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of nums) {
    const remainder = targetSum - num;
    if (canSum(remainder, nums, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

// Time complexity of memoized approach - O(m * n)
// Space complexity - O(m)

//Tabulation approach
function tabCanSum(targetSum, nums) {
  const table = Array(targetSum + 1).fill(false);

  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of nums) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
}

console.log(tabCanSum(7, [3, 2]));
console.log(tabCanSum(7, [5, 3, 4, 7]));
console.log(tabCanSum(8, [2, 3, 5]));
console.log(tabCanSum(300, [7, 14]));
