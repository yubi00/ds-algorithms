//Binar search iterative method with the time complexity of O(logn)
const nums = [1, 30, 4, 21, 10, 12, 3, 5]
const sort_nums = nums.sort((a,b) => a - b)
console.log(sort_nums)

function findTarget(arr, n) {
    let left = 0
    let right = arr.length - 1
    while( left <= right ) {
        let mid = Math.floor((left+right)/2)
        if( n === arr[mid]) {
            return `target was found at index ${mid}`
        } 

        if ( n < arr[mid]) {
            right = mid - 1
        } else  {
            left = mid + 1
        }
    }
    return 'target not found'
}

console.log(findTarget(sort_nums, 1000))

//Binary search tree algorithm using recursive approach with the time complexity of O(logn)
function findTargetRecursive(arr, l, h, key) {
    //base conditions 
    if(l===h) {
        return 0
    } else {
        let mid = Math.floor((l+h)/2)
        if( key === arr[mid]) {
            return mid
        } else if( key < arr[mid]) {
            return findTargetRecursive(arr, l, mid-1, key)
        } else if( key > arr[mid]){
            return findTargetRecursive(arr, mid+1, h, key)
        } else {
            return 'key  not found'
        }
    }
}
console.log(sort_nums)
console.log(findTargetRecursive(sort_nums, 0, sort_nums.length, 21))
