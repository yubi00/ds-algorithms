//Remove duplicates from a sorted array
// 1-2-2-3-3-3-4-4 -> 1-2-3-4

//using auxillary , extra space using two pointers i and j
function removeDuplicates(nums) {
  let temp = [];
  let j = 0;
  //loop until we reach second last element of the nums array to avoid index out of bound error
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      temp[j] = nums[i];
      j++;
    }
  }

  //push the last element to the end of the array list of temp
  temp[j] = nums[nums.length - 1];

  return temp;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4]));

//using constant space
function removeDuplicatesII(nums) {
  let j = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  nums[j] = nums[nums.length - 1];
  console.log(nums);
  return j + 1;
}

console.log(removeDuplicatesII([1, 2, 2, 3, 3, 3, 4, 4, 5]));
