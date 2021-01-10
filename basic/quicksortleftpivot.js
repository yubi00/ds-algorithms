let arr = [5, 3, 7, 6, 2, 9];

function partition(arr, low, high) {
  let left = low;
  let right = high;
  let pivot = arr[left];

  while (left !== right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    arr[left] = arr[right];
  }
  arr[left] = pivot;
  return left;
}

function quickSort(arr, left, right) {
  if (left < right) {
    let pi = partition(arr, left, right);
    quickSort(arr, left, pi - 1);
    quickSort(arr, pi + 1, right);
    return arr;
  }
}

console.log(quickSort(arr, 0, arr.length - 1));
