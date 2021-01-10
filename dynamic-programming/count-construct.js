//Brute force approach
// Time complexity - no of nodes in the call tree O(n ^ m * m)
// space complexity - O(m ^ 2) no of recursive call stacks
function bruteCountConstruct(target, wordbank) {
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const numways = bruteCountConstruct(target.slice(word.length), wordbank);
      totalCount += numways;
    }
  }
  return totalCount;
}

//Memoized approach
function countConstruct(target, wordbank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const numways = countConstruct(target.slice(word.length), wordbank, memo);
      totalCount += numways;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

//Tabulation approach
// Time complexity - O(m^2 * n)
// Space complexity - O(m) size of the table
function tabCountConstruct(target, wordbank) {
  const table = Array(target.length + 1).fill(0);
  //one way to make empty string
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordbank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
}

console.log(tabCountConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(tabCountConstruct("abcdef", ["ab", "abc", "def", "abcd", "ef"]));
console.log(
  tabCountConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  tabCountConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "ooooooo"
  ])
);

// m = target.length, m = wordbank.length
// Time complexity - O(n * m^2)
// Space complexity - o(m^2)
