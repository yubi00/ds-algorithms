// find the shortest possible combn that adds up to targetsum
// time complexity - O(n^m * m)
// space complexity - O(m * m)
const bruteBestSum = (targetSum, nums) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let min = null;

  for (let num of nums) {
    const remainder = targetSum - num;
    const remainderComb = bruteBestSum(remainder, nums);
    if (remainderComb !== null) {
      const combination = [...remainderComb, num];
      if (min === null || combination.length < min.length) {
        min = combination;
      }
    }
  }

  return min;
};

// Memoized approach
const memoBestSum = (targetSum, nums, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let min = null;

  for (let num of nums) {
    const remainder = targetSum - num;
    const remainderComb = memoBestSum(remainder, nums, memo);
    if (remainderComb !== null) {
      const combination = [...remainderComb, num];
      if (min === null || combination.length < min.length) {
        min = combination;
      }
    }
  }
  memo[targetSum] = min;
  return min;
};

function bestSum(targetSum, nums) {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25, 100]));

// Time complexity - O(m * n)
// Space complexity - o(m ^ 2)
