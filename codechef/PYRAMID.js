function generatePyramid() {
  var totalNumberofRows = 8;
  let word = "code";
  var output = "";

  for (let i = 1; i <= totalNumberofRows; i++) {
    for (let j = 0; j < i; j++) {
      if (word[j] === undefined) {
        for (let k = 0; k < i - word.length; k++) {
          output += word[k] + " ";
        }
        break;
      } else {
        output += word[j] + " ";
      }
    }
    console.log(output);
    output = "";
  }
}
//then call the function
generatePyramid();
