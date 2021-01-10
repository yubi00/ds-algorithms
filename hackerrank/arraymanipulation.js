let queries = [
  [1, 2, 100],
  [1, 5, 100],
  [3, 4, 100]
];

function arrayManipulation(n, queries) {
  let arr = new Array(n + 1);
  let max_sum = -Infinity;

  queries.forEach(([start, end, val]) => {
    arr[start] = arr[start] || { start: 0, end: 0 };
    arr[end] = arr[end] || { start: 0, end: 0 };

    arr[start].start += val;
    arr[end].end += val;
  });

  console.log(arr);

  let currentNo = 0;
  arr.forEach((num) => {
    if (num) {
      currentNo += num.start;

      if (currentNo > max_sum) {
        max_sum = currentNo;
      }

      currentNo -= num.end;
    }
    console.log(currentNo);
  });

  console.log(max_sum);
}

arrayManipulation(5, queries);
