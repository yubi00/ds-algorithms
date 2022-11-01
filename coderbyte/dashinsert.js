//insert dash in between if two consecutive numbers are odd and * if even
function dashInsert(str) {
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (isOdd(parseInt(str[i - 1])) && isOdd(parseInt(str[i]))) {
      result += "-" + str[i];
    } else if (isEven(parseInt(str[i - 1])) && isEven(parseInt(str[i]))) {
      result += "*" + str[i];
    } else {
      result += str[i];
    }
  }
  //removing trailing space
  return result;
}

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

console.log(dashInsert("4546793"));
