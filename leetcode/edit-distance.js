//Levenshetein distance

function editDistance(source, target) {
  let dp = new Array(target.length + 1)
    .fill(0)
    .map(() => new Array(source.length + 1).fill(0));

  for (let x = 0; x <= source.length; x++) {
    dp[0][x] = x;
  }

  for (let y = 0; y <= target.length; y++) {
    dp[y][0] = y;
  }

  for (let i = 1; i <= target.length; i++) {
    for (let j = 1; j <= source.length; j++) {
      if (target[i - 1] === source[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        let minValue = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
        dp[i][j] = minValue + 1;
      }
    }
  }
  console.log(dp);
  return dp[target.length][source.length];
}

const res = editDistance("horse", "ros");
console.log(res);
