function reverseString(str) {
    const str_arr = Array.from(str)

    let left = 0;
    let right = str_arr.length - 1

    while (left < right ) {
        if((/[^A-Z a-z0-9]/).test(str_arr[left]))  {
            left++
        } else if ((/[^A-Z a-z0-9]/).test(str_arr[right])) {
            right--
        } else {
            let temp = str_arr[right]
            str_arr[right] = str_arr[left]
            str_arr[left] = temp

            left++
            right--
        }
    }

    return str_arr
}

console.log(reverseString('he,ll$o'))