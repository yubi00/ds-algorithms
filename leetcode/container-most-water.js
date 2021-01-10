function maxArea(height) {
  let max = -Infinity;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    let min = Math.min(height[start], height[end]);
    max = Math.max(max, min * (end - start));

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
}

const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(res);

//Big O of O(N) comapred to the time complexity of n2 with the naive brute force approach
