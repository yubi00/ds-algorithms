const arr = ["AccountId", "AccountId", "Balance"];
console.table(arr);

//res: { from: "", to: "", balance: "" }

const res = [...arr]
  .map((val, i) => {
    if (true && val === "AccountId" && arr.indexOf(val) === i) {
      return "from";
    } else if (true && val === "AccountId" && arr.indexOf(val) !== i) {
      return "to";
    } else {
      return val;
    }
  })
  .reduce((acc, curr) => {
    acc[curr.charAt(0).toLowerCase() + curr.slice(1)] = "";
    return acc;
  }, {});

console.log(res);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3];

const result = arr1.filter((num) => !arr2.includes(num));

console.log(result);
