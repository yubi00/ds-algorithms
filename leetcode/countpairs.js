//brute force approach with the time complexity of O(n2)
function countPairs(nums, k) {
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        res.push([nums[i], nums[j]]);
      }
    }
  }

  return res;
}

//O(nlogn) because of sort
function countPairsII(nums, k) {
  nums.sort((a, b) => a - b);

  let res = [];
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum === k) {
      res.push([nums[i], nums[j]]);
      i++;
      j--;
    } else if (sum > k) {
      j--;
    } else {
      i++;
    }
  }

  return res;
}

//using hashset
function hashCountPairs(nums, k) {
  const store = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    //if store contains consecutive number of sum, that means we have found the pairs that has the sum equal to k
    if (store[k - nums[i]]) {
      res.push([nums[i], k - nums[i]]);
    } else {
      store[nums[i]] = true;
    }
  }

  return res;
}
console.log(countPairsII([2, 1, 5, 7, 4, -1], 6));
console.log(hashCountPairs([2, 1, 5, 7, 4, -1, 5, 1], 6));
console.log(hashCountPairs([2, 2, 2, 2, 2, 2], 4));
