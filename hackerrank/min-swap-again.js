function minSwap(arr) {
  let minSwap = 0;

  for (let i = 0; i < arr.length; i++) {
    //find the index of number , starting from that particular index and place in correct spot
    let number = i + 1;
    while (arr[i] !== number) {
      let index = arr.indexOf(number, i);
      arr[index] = arr[i];
      arr[i] = number;
      minSwap++;
    }
  }
  return minSwap;
}
const res = minSwap([3, 1, 2, 6, 4, 5, 7]);
console.log(res);
