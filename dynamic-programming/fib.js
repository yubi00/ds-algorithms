// Fib brute force approach using recursion with a big O of exponential O(2^n)

function fibBruteForce(n) {
  //base case
  if (n <= 2) return 1;
  return fibBruteForce(n - 1) + fibBruteForce(n - 2);
}

let res = fibBruteForce(8);
console.log(res);

//But we can always do better , right
// this approach uses memoization technique with a big O of O(n) and space complexity of O(n) as well
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

res = fibMemo(50);
console.log(res);

//Tabulation , bottoms up approach
function tabFib(n) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

res = tabFib(100);
console.log(res);
