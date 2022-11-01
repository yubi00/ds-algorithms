let f = function (a, b) {
  return arguments.length === f.length;
};

//determine if the function received the number of params it expected
console.log(f(1));
console.log(f(1, 2));
console.log(f(1, 2, 3));
