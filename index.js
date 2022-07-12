function isPalindrome(word) {
  // Write your algorithm here
  let isPalindrome = true;
  let first = 0;
  let last = word.length - 1;

  while (first < last && isPalindrome) {
    if (word[first] !== word[last]) {
      isPalindrome = false;
    }
    first++;
    last--;
  }
  return isPalindrome;
}

/* 
  Add your pseudocode here
    create letters array
    get the midpoint index
    iterate over first half of word
      push each leter
    iterate over second half of word
      pop each letter and if the popped letter is not equal to the next letter, word is not a pallindrome

*/

/*
  Add written explanation of your solution here
*/

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
