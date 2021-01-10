//Brute force approach , m = target.length, height of the tree and n = wordbank.length, branching factor
// Time complexity - no of nodes in the call tree O(n ^ m * m)
// space complexity - O(m ^ 2) no of recursive call stacks
function bruteCanConstruct(target, wordbank) {
  if (target === "") return true;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (bruteCanConstruct(suffix, wordbank)) return true;
    }
  }
  return false;
}

//Memoized approach
function canConstruct(target, wordbank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordbank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}
// m = target.length, m = wordbank.length
// Time complexity - O(n * m^2)
// Space complexity - o(m^2)

//Tabulation approach
// Time complexity = O(n * m^2)
// Space complexity - O(m)
function tabCanConsruct(target, wordbank) {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordbank) {
        // if the word matches the chars starting at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
}

console.log(tabCanConsruct("abcdef", ["ab", "abc", "def", "abcd"]));
console.log(
  tabCanConsruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  tabCanConsruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "ooooooo"
  ])
);
