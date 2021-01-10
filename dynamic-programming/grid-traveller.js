// no of ways to travel across a grid of m * n
//brute force approach with a time complexity of o(2^n+m)
// and space complexity of o(n+m)
function gridTraveller(m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
}

// time complexity - O(m * n)
// space complexity - O(n + m)

function gridTravellerMemoize(m, n, memo = {}) {
  const key = m + "," + n;

  if (key in memo) return memo[key];

  //handling base cases
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] =
    gridTravellerMemoize(m - 1, n, memo) + gridTravellerMemoize(m, n - 1, memo);
  return memo[key];
}

let res = gridTravellerMemoize(20, 50);
console.log(res);

// ----------Memoization Recipe--------------
// make it work, get the correct working solution
// visualize the problem as tree
// implement the tree using recursion
// test it

// make it efficient
// add a memo object
// add a base case to return memo values
// store return values into the memo

//Tabulation approach
function tabGridTraveller(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) {
        table[i][j] = 1;
      } else {
        table[i][j] = table[i - 1][j] + table[i][j - 1];
      }
    }
  }
  console.log(table);
  return table[m][n];
}

res = tabGridTraveller(3, 3);
console.log(res);

// Tabulation recipe
// visualize the problem as a table
// size the table based on the inputs
// initialize the table with default values
// seed the trivial answer into the table
// iterate through the table
// fill further positions based on the current position
