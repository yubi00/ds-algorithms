function meanMode(arr) {
  let mean = findMean(arr);
  let mode = findMode(arr);

  return mean === mode ? 1 : 0;
}

function findMean(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}

function findMode(arr) {
  const store = {};
  let mode = 0;
  let max = 1;

  for (let num of arr) {
    store[num] = ++store[num] || 1;
  }

  for (let key in store) {
    if (store[key] > max) {
      max = store[key];
      mode = key;
    }
  }

  return parseInt(mode);
}

console.log(meanMode([1, 2, 3]));
