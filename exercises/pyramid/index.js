/* eslint-disable no-plusplus */
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  if (n === 0) {
    return;
  }
  let blocks = '#';
  for (let i = 1; i <= n; i++) {
    if (i > 1) {
      blocks = `#${blocks}#`;
    }
    let line = blocks;
    while (line.length < 2 * n - 1) {
      line = ` ${line} `;
    }
    console.log(line);
  }
}

module.exports = pyramid;
