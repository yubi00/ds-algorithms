function getSum(n) {
  let sum = 0;
  while (n) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }

  return sum;
}

function happyNumber(n) {
  const seen = new Set();

  while (n != 1) {
    n = getSum(n);

    if (seen.has(n)) {
      return false;
    }

    seen.add(n);
  }
  return true;
}

const res = happyNumber(19);
console.log(res);
