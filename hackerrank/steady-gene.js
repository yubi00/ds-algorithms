function steadyGene(gene) {
  let length = gene.length;
  let steadyGeneLength = length / 4;

  let store = {};
  for (let char of gene) {
    store[char] = ++store[char] || 1;
  }

  let count = 0;
  for (let key in store) {
  }
}

const res = steadyGene("GAAATAAA");
console.log(res);
