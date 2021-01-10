// function fact(n) {
//   let i,
//     result = BigInt(1);

//   for (i = BigInt(2); i <= n; i++) {
//     result *= i;
//   }
//   return result.toString();
// }

// const res = fact(25);
// console.log(res);

function extraLongFactorials(n) {
  let result = new Array();
  result[0] = 1;
  let size = 1;

  for (let i = 2; i <= n; i++) {
    size = mul(i, result, size);
  }
  return result;
}

function mul(n, res, size) {
  let carry = 0;
  for (let i = 0; i < size; i++) {
    let prod = res[i] * n + carry;
    res[i] = prod % 10;
    carry = Math.floor(prod / 10);
  }

  //put carry in res and increase result size
  while (carry) {
    res[size] = carry % 10;
    carry = Math.floor(carry / 10);
    size++;
  }
  return size;
}

const res = extraLongFactorials(1000);
const rev = res.reverse();
const ans = BigInt(rev.join(''));
console.log(ans.toString());
