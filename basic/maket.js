let data = [1,2,3,3,3,5,1,2,2,6,6]

function partition (data, left, right, x) {
    let low = left
    let high = right
    let result = [data[low]]
    let index = 0
    for(let i=low; i<high; i++ ) {
        let variance = Math.abs(data[i] - data[i-1])
        if(!data[i-1]) {
            result[i] = data[i]
        }
        else if(variance === x) {
            result[i] = data[i]
        } else if (variance === 0 ) {
            result[i] = data[i]
        } else {
             index = i
             break;
        }
    }
    return  { index, result }
}

function getVariances(data, x) {
    let allvariances = []
    let { index, result } = partition(data, 0, data.length, x)
    allvariances.push(result)
    let nextvariances = partition(data, index+1, data.length, x)
    allvariances.push(nextvariances.result)
    return allvariances[0]
}
let allvariances = getVariances(data, 1)
console.log(allvariances)





