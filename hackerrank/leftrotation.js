//brute force approach

let arr = [1,2,3,4,5]
let n = 3
let shiftedEl = []
for(let i=0; i<n; i++) {
    shiftedEl.push(arr.shift())
}

console.log(arr.concat(shiftedEl))