function offlineMin(arr) {
  let result = [];
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "E") {
      for (let j = 0; j < i; j++) {
        if (
          arr[j] !== "E" &&
          parseInt(arr[j]) < min &&
          result.indexOf(arr[j]) === -1
        ) {
          min = arr[j];
        }
      }
      result.push(min);
      min = Infinity;
    }
  }

  return result.join(",");
}

const res = offlineMin(["4", "E", "1", "E", "2", "E", "3", "E"]);
console.log(res);
console.log(offlineMin(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]));
console.log(offlineMin(["1", "2", "E", "E", "3"]));
