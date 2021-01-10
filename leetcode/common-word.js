let mostCommonWord = function (paragraph, banned) {
  if (paragraph.length === 0) return "";
  const bannedWords = {};
  for (let word of banned) {
    bannedWords[word] = ++bannedWords[word] || 1;
  }

  let wordsStore = {};
  let paragraphWords = paragraph.toLowerCase().split(/[ ,]+/);
  for (let word of paragraphWords) {
    let key = word.replace(/[^a-zA-Z]/, "");
    if (!bannedWords[key]) {
      wordsStore[key] = ++wordsStore[key] || 1;
    }
  }

  let commonWord = "";
  let max = -Infinity;
  for (let word in wordsStore) {
    if (wordsStore[word] > max) {
      max = wordsStore[word];
      commonWord = word;
    }
  }
  return commonWord;
};

const res = mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]);
console.log(res);
