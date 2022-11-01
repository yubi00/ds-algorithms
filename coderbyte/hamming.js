function hammingDistance(str) {
  let first_str = str[0];
  let second_str = str[1];

  let hd = 0;

  for (let i = 0; i < first_str.length; i++) {
    if (first_str[i] !== second_str[i]) {
      hd++;
    }
  }

  return hd;
}

console.log(hammingDistance(["helloworld", "worldhello"]));
