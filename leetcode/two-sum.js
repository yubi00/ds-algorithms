/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
*/
function bruteTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const res = bruteTwoSum([1, 2, 4], 6);
console.log(res);

function betterTwoSum(nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      console.log(nums[i]);
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
}

const result = betterTwoSum([1, 2, 4, 7], 6);
console.log("better", result);

// const store = {};
//   for (let i = 0; i < nums.length; i++) {
//     store[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let num = target - nums[i];
//     if (store[num] && store[num] !== i) {
//       return [i, store[num]];
//     }
//   }
//     return []
//
