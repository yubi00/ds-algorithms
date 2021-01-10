// this approach uses constant space  and linear time complexity
function removeDuplicates(arr) {
  let index = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[index++] = arr[i + 1];
    }
  }

  return index;
}

const res = removeDuplicates([1, 1, 2, 3]);
console.log(res);
