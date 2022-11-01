// palindrom with recursion

function isPalindrome(str) {
  return helper(str, 0, str.length - 1);
}

function helper(str, i, j) {
  //base case
  if (i === j) return true;

  //if two characters are not same
  if (str[i] !== str[j]) return false;
  if (i < j) {
    i++;
    j--;
    return helper(str, i, j);
  }

  //esle return true if everything matches
  return true;
}

console.log(isPalindrome("radar"));

// this solution has the problem of exceeding js call stack size given very long string
