const ids = new Set()

ids.add('abc')
ids.add(1)
ids.add('bb2')

console.log(ids)
console.log(ids.has('abc'))

ids.delete('bb2')
console.log(ids)