function mergeArr(nums1, m, nums2, n) {
  while (n) {
    nums1[m] = nums2[n - 1];
    m++;
    n--;
  }
  nums1.sort((a, b) => a - b);
  return nums1;
}

const res = mergeArr([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5);
console.log(res);
