function NumberSearch(str) {
  let parts = str.toLowerCase().split(""); // Convert the inputted string to all lowercase letters and split based on character
  let sum = 0; // Create a counter to keep track of the sum of all numbers in the string
  let letterTotal = 0; // Create a counter to keep track of the number of letters we come across in the string
  for (let i = 0; i < parts.length; i++) {
    // FOR-LOOP: Traverse thru each character of the inputted string. FOR EACH character...
    if (parts[i] >= "0" && parts[i] <= "9") {
      //   -> IF: the character is a number...
      sum += parseInt(parts[i]); //        -> Convert the number from a string into an integer, and add it to the sum counter
    }
    if (parts[i] >= "a" && parts[i] <= "z") {
      //   -> IF: the character is a letter...
      letterTotal += 1; //        -> Add 1 to the letter counter
    }
  }
  return Math.round(sum / letterTotal); // Divide the sum of numbers by the letter total, round the value, and return the value
}
