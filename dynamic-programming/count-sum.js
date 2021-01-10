//Brute force approach
function countSum(target, nums) {
  let result = [];
  const store = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] === 0) {
      result.push([nums[i]]);
    }
    if (store[nums[i]]) {
      result.push([nums[i], store[nums[i]]]);
    }
    store[target - nums[i]] = nums[i];
  }
  return result;
}

function tabCountSum(target, nums) {
  const table = Array(target + 1)
    .fill()
    .map(() => []);

  //base case
  table[0] = [[]];

  for (let i = 0; i <= target; i++) {
    for (num of nums) {
      if (table[i] && i + num <= target) {
        const combination = table[i].map((comb) => [...comb, num]);
        table[i + num].push(...combination);
      }
    }
  }

  return table[target];
}

console.log(tabCountSum(7, [5, 3, 4, 2]));
console.log(tabCountSum(8, [4, 5, 2, 3]));
console.log(tabCountSum(100, [25, 100]));
