var reverseVowels = function (str) {
  //base case
  if (str.length === 0) return "";
  let left = 0;
  let right = str.length - 1;

  const store = {};
  for (char of ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]) {
    store[char] = 1;
  }
  let s = str.split("");

  while (left < right) {
    if (store[s[left]] && store[s[right]]) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    } else if (store[s[left]] && !store[s[right]]) {
      right--;
    } else if (!store[s[left]] && store[s[right]]) {
      left++;
    } else {
      left++;
      right--;
    }
  }
  return s.join("");
};

const res = reverseVowels("leetcode");
console.log(res);
