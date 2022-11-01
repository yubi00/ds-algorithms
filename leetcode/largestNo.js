//brute force approach
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let max = [];
  let maxMod;
  let currMax;

  for (let i = 0; i < nums.length; i++) {
    currMax = nums[0];
    maxMod = -Infinity;
    for (let j = 0; j < nums.length; j++) {
      if (!max.includes(nums[j])) {
        let mod = nums[j] % 10;
        if (mod > maxMod) {
          maxMod = mod;
          currMax = nums[j];
        }
      }
    }

    max.push(currMax);
  }

  return max.join("");
};

console.log(largestNumber([3, 30, 34, 9, 5]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([1]));

//better approach
function largeNumber(nums) {}
