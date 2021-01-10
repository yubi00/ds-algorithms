function removeDuplicates(arr) {
  const store = {};
  for (let num of arr) {
    store[num] = ++store[num] || 1;
  }

  return arr.filter((num) => store[num] < 2);
}

const res = removeDuplicates([1, 1, 2, 3, 3, 4, 5]);
console.log(res);
