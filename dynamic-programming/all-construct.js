// Time complexity - O(n ^ m)
// Space complexity - O(m) height of the tree
function bruteAllConstruct(target, wordbank) {
  if (target === "") return [[]];

  const result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = bruteAllConstruct(suffix, wordbank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
}

//Memoized approach
function allConstruct(target, wordbank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordbank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

// Tabulation approach
// Time complexity - O(n ^ m)
// Space complexity - O(m)

function tabAllConstruct(target, wordbank) {
  //  1 extra space allocated for the empty string
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  // 0 ways to create empty string
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordbank) {
      if (target.slice(i, i + word.length) === word) {
        const combination = table[i].map((comb) => [...comb, word]);
        table[i + word.length] = [...table[i + word.length], ...combination];
      }
    }
  }

  return table[target.length];
}

console.log(tabAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  tabAllConstruct("abcdef", ["ab", "abc", "cd", "def", "c", "ef", "abcd"])
);
console.log(
  tabAllConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  tabAllConstruct("eeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeeee"])
);
