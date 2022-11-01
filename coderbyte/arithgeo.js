function isArithGeo(arr) {
  let diff = arr[1] - arr[0];
  let ratio = arr[1] / arr[0];

  let arith = true;
  let geo = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      arith = false;
    }

    if (arr[i + 1] / arr[i] !== ratio) {
      geo = false;
    }
  }

  return arith === true ? "Arithmentic" : geo === true ? "Geometric" : -1;
}

console.log(isArithGeo([2, 4, 6, 8, 10]));
console.log(isArithGeo([2, 6, 18, 54]));
console.log(isArithGeo([1, 2, 3, 6, 9]));
