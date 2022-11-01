function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz" + "Buzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//fizzBuzz(15);

function fizzBuzzII(n) {
  return [...Array(n)]
    .map((_, i) => {
      i++;
      return i % 15 === 0
        ? "fizzBuzz"
        : i % 5 === 0
        ? "Fizz"
        : i % 3 === 0
        ? "Buzz"
        : i;
    })
    .join("\n");
}

function shortFizzBuzz(n) {
  for (let i = 0; i < n; )
    console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
}

//console.log(fizzBuzzII(50));
// shortFizzBuzz(50);

function fizzbuzzAgain(n) {
  return [...Array(n)]
    .map((_, i) => {
      i++;
      return i % 5 === 0 && i % 3 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i;
    })
    .join("\n");
}

function fizzbuzzShortAgain(n) {
  for (let i = 0; i < n; ) {
    console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
  }
}

fizzbuzzShortAgain(50);
