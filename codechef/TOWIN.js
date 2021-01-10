let numbers = [1,1,1,6,1,1,1]
let p1 = 0
let p2 = 0

for(let i=0; i<numbers.length; i++) {
        if(i === 0 ) {
            p1 = p1 + numbers[i]
        } else if( i === 1) {
            p2 = p2 + numbers[i]
        } else if (i % 2 === 0) {
            p2 = p2 + numbers[i]
        } else {
            p1 = p1 + numbers[i]
        }
}
console.log(p1, p2)
if(p1 < p2 ) {
    console.log('second')
} else if(p1 > p2 ) {
    console.log('first')
} else {
    console.log("draw")
}