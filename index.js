function reverse(word) {
// //separate the individual characters into an array of characters
//   const sepChar = word.split('')
// //reverse the order of the array
//   const reversedArray = sepChar.reverse()
// //join the array of characters back together so that it is a single word
//   const reversedWord = reversedArray.join('')
// //return the reversed word
//   return reversedWord

  // or you can write the above code like this:
  return word.split('').reverse().join('');
}


function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  if(word === reversedWord) {
    //return true
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  
  convert string into individual character
    => expect 'mom' to equal 'm', 'o', 'm'
  
  grab individual character and return it in reverse
    => expect 'b', 'o', 'y' to equal 'y', 'o', 'b'
  
  put individual characters together
    => expect 'y', 'o', 'b' to equal 'yob'
  
  if string is a Palindrome, then return true
  
  if string is not a Palindrome, then return false
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
