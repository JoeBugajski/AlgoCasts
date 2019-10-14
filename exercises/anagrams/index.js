/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(str) {
  const charMap = {};
  str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .forEach((element) => {
      charMap[element] ? charMap[element]++ : (charMap[element] = 1);
    });
  return charMap;
}

function anagrams(stringA, stringB) {
  const stringAObj = buildCharMap(stringA);
  const stringBObj = buildCharMap(stringB);
  if (Object.keys(stringAObj).length === Object.keys(stringBObj).length) {
    for (let char in stringAObj) {
      if (stringAObj[char] !== stringBObj[char]) {
        return false;
      } 
        return true;

    }
  } else {
    return false;
  }
}

module.exports = anagrams;
