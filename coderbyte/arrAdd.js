function arrAdd(arr) {
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max) {
      sum += arr[i];
      if (sum > max) {
        for (let j = 0; j < i; j++) {
          if (sum - arr[j] === max) {
            return "true";
          }
        }
      }
    }
  }

  return "false";
}

const res = arrAdd([5, 7, 16, 1, 2]);
console.log(res);
