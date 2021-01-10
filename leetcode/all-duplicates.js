//Remove all duplicates using constant space and linear run time
function removeDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(index + 1);
    }
    nums[index] = -nums[index];
  }
  return result;
}

const res = removeDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(res);
