// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capStr = str
    .split('')
    .map((element, index) => {
      if (index === 0 || str[index - 1] === ' ') {
        return element.toUpperCase();
      }
      return element;
    })
    .join('');
  return capStr;
}

capitalize('dog');

module.exports = capitalize;
