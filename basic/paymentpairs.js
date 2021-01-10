let cents = [40, 60 ,25, 5, 100, 300]

let sum = cents[0]

for(let i=1; i<cents.length; i++) {
    sum+=cents[i]
}
let dollar = Math.floor(sum/100)

console.log(dollar)