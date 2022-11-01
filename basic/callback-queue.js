console.log("starting");

setTimeout(() => {
  console.log("2 sec timer");
}, 2);

setTimeout(() => {
  console.log("10 sec timer");
}, 10);

setTimeout(() => {
  console.log("0 sec timer");
}, 0);

console.log("finish");

Promise.resolve("promise resolve").then((res) => console.log(res));
