const str1 = 'abcdef'
const str2 = 'abdzy'

function isAnagram(str1, str2) {
    let s1 = str1.split('')
    let s2 = str2.split('')
    let count = 0
    let store = {}
    let store2 = {}
    for(val of s1) {
        if(store[val]) {
            store[val]++
        } else {
            store[val] = 1
        }

    }

    for(val of s2) {
        if(store[val]) {
            store[val]--
        } else {
            if(store2[val] ) {
                store2[val] ++
            } else {
                store2[val] = 1
            }
        }
    }
    for(el in store) {
        count+=store[el]
    }
    for(el in store2) {
        count += store2[el]
    }
   return count
}

console.log(isAnagram(str1, str2))