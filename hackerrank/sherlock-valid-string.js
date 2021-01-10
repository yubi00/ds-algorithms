function isValid(s) {
  if (s.length === 0) return "NO";
  if (s.length === 1) return "YES";

  //store the occurence of each characters in a hash table
  const store = {};

  for (let char of s) {
    if (store[char]) {
      store[char]++;
    } else {
      store[char] = 1;
    }
  }
  // if all the occurences of characters are same
  let values = Object.values(store).sort((a, b) => a - b);
  if (values.every((value) => value === values[0])) {
    return "YES";
  }
  //remove the value with lowest occurence if 1 and see if rest of the occ are equal
  let copy = [...values];
  if (copy[0] === 1) {
    copy.shift();
    if (Math.max(...copy) === Math.min(...copy)) return "YES";
  }

  //remove one char from the last elem with max occurences and see if rest of the occ are equal
  values[values.length - 1] -= 1;
  if (values.every((value) => value === values[0])) return "YES";

  //otherwise reutrn NO
  return "NO";
}

const res = isValid("abcc");
console.log(res);
