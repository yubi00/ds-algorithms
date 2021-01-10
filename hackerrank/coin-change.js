//You ar given denominations of coins and the target amount N, what is the least amount of coins to make of amount N ?
//Bottoms up dynamic programming approach with a big O of O(N*k)
function coinChange(arr, N) {
  let dp = new Array(N + 1).fill(N + 1);
  arr.sort((a, b) => a - b);
  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let coin of arr) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      } else {
        break;
      }
    }
  }
  console.log(dp);
  return dp[N] > N ? -1 : dp[N];
}

const res = coinChange([1, 2, 5], 11);
console.log(res);

//Total unique way to make change
function countCountChange(coins, N) {
  let dp = new Array(N + 1).fill(0);
  dp[0] = 1;
  for (let coin of coins) {
    for (let i = 1; i < dp.length; i++) {
      if (i >= coin) {
        dp[i] += dp[i - coin];
      }
    }
  }
  console.log(dp);
  return dp[dp.length - 1];
}

const result = countCountChange([1, 2, 5], 5);
console.log(result);
