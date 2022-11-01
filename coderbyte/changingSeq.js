function changingSeq(arr) {
  for (let i = 0; i < arr.length; i++) {
    //increasing seq
    if (arr[1] > arr[0] && arr[i + 1] < arr[i]) {
      return i;
    }

    //decreasing seq
    if (arr[i] < arr[0] && arr[i + 1] > arr[i]) {
      return i;
    }
  }

  //returns -1 if seq is not found
  return -1;
}

const res = changingSeq([5, 4, 3, 2, 10, 11]);
console.log(res);
