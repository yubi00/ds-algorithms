function minimumSwaps(arr) {
    let minSwaps = 0;

    for (let i = 0; i < arr.length; i++) {
        // at this position what is the right number to be here
        // for example at position 0 should be 1
        // add 1 to i if array starts with 1 (1->n)
        const right = i+1;
        // is current position does not have the right number
        if (arr[i] !== right) {
            // find the index of the right number in the array
            // only look from the current position up passing i to indexOf
            const rightIdx = arr.indexOf(right, i);
            // replace the other position with this position value
            arr[rightIdx] = arr[i];
            // replace this position with the right number
            arr[i] = right;
            // increment the swap count since a swap was done
            ++minSwaps;
            
            
        }
    }
    console.log(arr)
    return minSwaps;
}

const arr = [3,1,5,2,4,6,7]

console.log(minimumSwaps(arr))