function otherProducts(arr) {
  let result = arr.map((num) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== num) {
        product = product * arr[i];
      }
    }
    return product;
  });

  return result.join("-");
}

const res = otherProducts([1, 2, 3, 4, 5]);
console.log(res);
