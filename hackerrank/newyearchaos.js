let arr = [1, 2, 3, 5, 4];
let finalstate = [3, 1, 2, 5, 4];
let q = [5, 1, 2, 3, 4];
let q1 = [1, 2, 5, 3, 4];

function minimumBribe(q) {
  let bribes = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      return "too chaotic";
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
  return bribes;
}

// Complete the minimumBribes function below.
function minimumBribes(arr) {
  let swap = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] !== i + 1) {
      if (i - 1 >= 0 && arr[i - 1] === i + 1) {
        //in this swap one swap was made
        swap++;
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      } else if (i - 2 >= 0 && arr[i - 2] === i + 1) {
        console.log("test");
        //two swap was made
        swap += 2;
        [arr[i - 1], arr[i - 2]] = [arr[i - 2], arr[i - 1]];
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
  }
  console.log(arr);
  return swap;
}

console.log(minimumBribes([2, 1, 5, 3, 4]));
