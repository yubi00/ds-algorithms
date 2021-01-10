var isValid = function (s) {
  let stack = [];
  const store = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  for (let i = 0; i < s.length; i++) {
    if (!store[s[i]]) {
      if (s[i] !== store[stack.pop()]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? true : false;
};

const res = isValid("{}");

console.log(res);
