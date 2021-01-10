function romanInt(s) {
  const romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] && (s[i + 1] === "X" || s[i + 1] === "V")) {
      let temp = romans[s[i + 1]] - romans[s[i]];
      number += temp;
      i++;
    } else if (
      s[i] === "X" &&
      s[i + 1] &&
      (s[i + 1] === "L" || s[i + 1] === "C")
    ) {
      let temp = romans[s[i + 1]] - romans[s[i]];
      number += temp;
      i++;
    } else if (
      s[i] === "C" &&
      s[i + 1] &&
      (s[i + 1] === "D" || s[i + 1] === "M")
    ) {
      let temp = romans[s[i + 1]] - romans[s[i]];
      number += temp;

      i++;
    } else {
      number += romans[s[i]];
    }
  }
  return number;
}
const res = romanInt("MCMXCIV");
console.log(res);
