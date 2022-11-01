//factorials
function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(10));

//fib with the time complexity of exponential time which is o(2^n)
function fib(n) {
  if (n < 3) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(2));

//frog/stair case problems using dynamic programming with the time complexity of o(n), bottoms up/tabulation approach
function num_ways(n) {
  if (n == 1 || n == 0) {
    return 1;
  }

  const nums = new Array();
  nums[0] = 1;
  nums[1] = 1;

  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  console.log(nums);
  return nums[n];
}

console.log(num_ways(4));

//computing fibonacci series using dynamic programming- memoization approach with o(n)

function fib_memo(n) {
  const memo = {};
  if (n in memo) {
    return memo[n];
  }
  let result;
  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = fib_memo(n - 1) + fib_memo(n - 2);
    memo[n] = result;
  }
  return result;
}
//console.log(fib_memo(100));

//computing fibonacci series using dynamic programming with the bottoms up approach time complexity of O(n)
function fib_bottom(n) {
  const bottom_up = [];
  if (n === 1 || n === 2) {
    return 1;
  }

  bottom_up[1] = 1;
  bottom_up[2] = 1;

  for (let i = 3; i <= n; i++) {
    bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2];
  }
  return bottom_up[n];
}

//console.log(fib_bottom(1000));

function fibonacci(n) {
  const list = [0, 1];
  for (let x = 2; x <= n; x += 1) {
    list[x] = list[x - 1] + list[x - 2];
  }
  return list[n];
}

//console.log(fibonacci(4));
console.log("Printing sequential numbers....");

function printNumber(start, end) {
  if (start > end) return;
  console.log(start);

  return printNumber(start + 1, end);
}

printNumber(1, 10);
