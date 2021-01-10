const resultData = new Map()

resultData.set('average', 1.53)
resultData.set('lastResult', null)

console.log(resultData)

const country = {
    name: 'Germany',
    pop: 82
}

resultData.set(country, 0.89)

console.log(resultData)

for(const el of resultData) {
    console.log(el)
}

console.log(resultData.get('average'))
resultData.delete(country)
console.log(resultData)