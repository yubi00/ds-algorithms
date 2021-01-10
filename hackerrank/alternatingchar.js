function alternatingCharacters(s1) {
    let count = 0
    for(let i=0; i<s1.length; i++) {
        if(s1[i+1]) {
            if(s1[i] === s1[i+1]) {
                count++
            }
        }
    }
    return count
}

console.log(alternatingCharacters('ABABBBBBA'))