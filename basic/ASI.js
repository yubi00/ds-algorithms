let a = {
  a: 123
};

[a].forEach(function (x) {
  console.log(x);
});

// what happens when you run this code ? and why?

console.log(bar); // undefined
console.log(foo); // ReferenceError
var bar = 1;

// let foo = 2; // End of TDZ (for foo)
