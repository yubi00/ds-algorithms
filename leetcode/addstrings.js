function addStrings(num1, num2) {
  //two pointers for two different numbers
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = "";

  //we go from right to left of both the numbers
  while (i >= 0 || j >= 0) {
    let first = i < 0 ? 0 : parseInt(num1[i]);
    let second = j < 0 ? 0 : parseInt(num2[j]);
    let tempSum = carry + first + second;
    let remainder = tempSum;

    if (tempSum <= 9) {
      carry = 0; //reset carry if temp sum is less than 9
    }

    if (tempSum > 9 && (i > 0 || j > 0)) {
      carry = Math.floor(tempSum / 10);
      remainder = tempSum % 10;
    }

    if (tempSum > 9 && i === 0 && j === 0) {
      remainder = tempSum;
    }

    //sum += remainder * 10 ** p; // fails for 16 digits number, need to find another alternative to this
    sum = remainder.toString() + sum;

    i--;
    j--;
  }

  return sum;
}
console.log(addStrings("18582506933032755", "366213329703"));
console.log(addStrings("11", "23"));
console.log(addStrings("9", "1"));
console.log(addStrings("99", "99"));
console.log(addStrings("999", "999"));
console.log(addStrings("456", "77"));
