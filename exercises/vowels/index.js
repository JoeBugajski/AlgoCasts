// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  // the method includes() can be used to match values
  const vowelChecker = 'aeiou';
  // This also works if you make the checker an array
  // In fact an array might be preferable, so you can match longer strings as well
  // const vowelChecker = [ 'a', 'e', 'i', 'o', 'u']
  for (char of str) {
    if (vowelChecker.includes(char.toLowerCase())) {
      count += 1;
    }
  }
  return count;
}

// Here's the RegEx solution:

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }
module.exports = vowels;
