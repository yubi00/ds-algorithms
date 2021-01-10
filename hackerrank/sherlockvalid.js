function isValid(s) {
  let s1 = s.split("");
  let store = {};

  for (let val of s1) {
    if (store[val]) {
      store[val]++;
    } else {
      store[val] = 1;
    }
  }

  let values = Object.values(store).sort();
  let difference = Math.max(...values) - Math.min(...values);

  if (difference > 1) {
    return "NO";
  } else if (
    values[values.length - 1] !== values[0] &&
    values[values.length - 2] === values[values.length - 1]
  ) {
    return "NO";
  }

  return "YES";
}

console.log(isValid("aaabbcc"));
