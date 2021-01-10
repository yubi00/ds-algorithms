const twodarr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [ 0,  0,  8,  6, 6, 0],
    [ 0,  0,  0, -2, 0, 0],
    [ 0,  0,  1,  2, 4, 0]
]

function getSum(arr, row, col) {
    let sum = 0
    sum += arr[row][col]
    sum += arr[row-1][col-1]
    sum += arr[row-1][col]
    sum += arr[row-1][col+1]
    sum += arr[row+1] [col-1]
    sum+= arr[row+1][col]
    sum += arr[row+1][col+1]

    return sum
}

function getMaxHourGlassSum(arr) {
    let maxSum = -63
    for(let row=1; row<arr.length-1; row++) {
        for(let col=1; col<arr.length-1; col++) {
            let current_sum = getSum(arr, row, col)
            if (current_sum > maxSum) {
                maxSum = current_sum
            }
        }
    }
    return maxSum
}

console.log(getMaxHourGlassSum(twodarr))

