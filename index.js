function isPalindrome(str) {
  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
function isPalindrome(str) {
  // convert the input string to lowercase
  str = str.toLowerCase();

  // initialize two pointers
  let start = 0;
  let end = str.length - 1;

  // traverse through the string from both ends
  while (start < end) {
    // if the characters at the pointers are not equal, return false
    if (str[start] !== str[end]) {
      return false;
    }
    // move the pointers towards the middle of the string
    start++;
    end--;
  }

  // if the traversal is completed without returning false, return true
  return true;
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
