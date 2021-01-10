let arr = [1, 3, 2, 2, 3, 5, 5, 9];

// let duplicate = item_list.reduce((acc,currentValue,index, array) => {
//   if(array.indexOf(currentValue)!=index && !acc.includes(currentValue)) {

//     acc.push(currentValue); }

//   return acc;
// }, []);

// console.log('Duplicate items are ' + duplicate.join(','));

// const result = new Map()

// item_list.forEach((item, index) => {
//   if(!result.has(item)) {
//     result.set(index, item)
//   }
// })
// console.log(result)

let result = arr.reduce((acc, curr, index) => {
  if (arr.indexOf(curr) === index) {
    acc.push(curr);
  }
  return acc;
}, []);

function removeDuplicate(arr) {
  const store = {};
  for (let value of arr) {
    store[value] = ++store[value] || 1;
  }
  return Object.keys(store);
}

function removeDuplicate2(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const res = removeDuplicate2(arr);
console.log(res);
