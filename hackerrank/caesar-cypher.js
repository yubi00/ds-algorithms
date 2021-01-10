function caesarCypher(str, k) {
  let copy = str.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let firstThree = alphabet.slice(0, k);
  let s = alphabet.slice(k);

  let rotatedAlpha = s + firstThree;

  for (let i = 0; i < copy.length; i++) {
    if (/^[A-Z]+$/.test(copy[i])) {
      let encryptedChar = rotatedAlpha[alphabet.indexOf(copy[i].toLowerCase())];
      copy[i] = encryptedChar.toUpperCase();
    } else if (/^[a-z]+$/.test(copy[i])) {
      copy[i] = rotatedAlpha[alphabet.indexOf(copy[i])];
    }
  }
  return copy.join("");
}

function betterCaesarCypher(s, k) {
  s = s.split("");
  k = k > 25 ? k % 26 : k;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.slice(k) + alphabet.slice(0, k);
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      let index = s[i].charCodeAt(0) - 97;
      console.log(index);
      if (index < 0) {
        index = s[i].charCodeAt(0) - 65;
        s[i] = alphabet[index].toUpperCase();
      } else {
        s[i] = alphabet[index];
      }
    }
  }
  console.log(alphabet);
  return s.join("");
}

const res = betterCaesarCypher("helloWorld", 3);
console.log(res);
