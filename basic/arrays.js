const names = ['yubi', 'buchu', 'pranjala', 'buchu']

//index
console.log(names[1])
for(const el of names) {
    console.log(el)
}

names.push('khadka')
console.log(names.length)

//find element
const isBuchu = names.findIndex(el => el === 'buchu')
console.log(isBuchu)

//remove element
names.splice(2, 1)
console.log(names)

const array = [1,1,2,3,4,5,10,345,32,67,1,3]



//remove duplicate, removing the duplicate values using splice
if (arr.length < 2) return arr.length

    for(let i = 0; i < arr.length; i++) {
        while (arr[i] === arr[i - 1]) arr.splice(i, 1)
    }

console.log(arr)


const new_arr = []
const val_occ = {}
let count = 0

for(let i=0; i<array.length; i++) {
    for(let j=i; j<array.length; j++) {
        if(array[i] === array[j+1] || new_arr.includes(array[i])) {
            new_arr.push(array[i])
            break;
        }
    }
}

for(let val of new_arr ) {
    val_occ[val] = (val_occ[val] = val_occ[val] + 1) || 1
}


for(let i=0; i<array.length; i++) {
    if(new_arr.indexOf(array[i]) === -1) {
        new_arr.push(array[i])
    }
}

console.log(new_arr)
console.log(val_occ)

