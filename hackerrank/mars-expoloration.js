function marsExpoloration(s) {
  let noMessages = Math.floor(s.length / 3);

  let originalMessage = "";
  for (let i = 0; i < noMessages; i++) {
    originalMessage += "SOS";
  }

  if (originalMessage === s) return 0;

  let count = 0;
  for (let j = 0; j < s.length; j++) {
    if (s[j] !== originalMessage[j]) {
      count++;
    }
  }
  return count;
}

const res = marsExpoloration("SOSSPSSQSSOR");
console.log(res);
