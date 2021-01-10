function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
//brute force approach of o(n3) which is not efficient
function longestPalindrome(s) {
  let start = 0;
  let end = 0;
  let ans = "";
  let max = -Infinity;

  while (end < s.length && start < s.length) {
    let sub = s.substring(start, end + 1);
    if (!isPalindrome(sub)) {
      end++;
    } else {
      max = Math.max(max, end - start + 1);
      ans = s.substring(start, end + 1);
      start++;
    }
  }
  return ans;
}

//Using Dynamic programming with of Big O of O(N2) faster than naive approach of O(N3)
/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome2 = function (s) {
  if (s === s.split("").reverse().join("")) {
    return s.substring(0, s.length);
  }

  let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0));
  let max = -Infinity;
  let ans = "";

  //the substring with the length 1  a palindrome so updating the dp table
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
    if (i - i + 1 > max) {
      max = i - i + 1;
      ans = s.substring(i, i + 1);
    }
  }

  // for the substring of length two is palindrome if both of the char are equal otherwise not
  //updating the dp table for the substring of length 2
  for (let i = 0; i < s.length; i++) {
    //if palindrome
    if (s[i] === s[i + 1]) {
      //updating the table
      dp[i][i + 1] = 1;
      if (i + 1 - i + 1 > max) {
        max = i + 1 - i + 1;
        ans = s.substring(i, i + 1 + 1);
      }
    }
  }

  //for the substring of length 3 or greater, updatifing the table
  for (let k = 2; k < s.length; k++) {
    for (let i = 0; i < s.length; i++) {
      let j = i + k;
      //substring is palindrome if boundary elemets are equal and the subs between the boundaries are also a palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
        dp[i][j] = 1;
        if (j - i + 1 > max) {
          max = j - i + 1;
          ans = s.substring(i, j + 1);
        }
      }
    }
  }
  return ans;
};

const res = longestPalindrome2("bacabab");
console.log(res);
