// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative solution
// function fib(n) {
//   let fibs = [0, 1];
//   if (n > 1) {
//     for (let i = 2; i <= n; i++) {
//       fibs.push(fibs[i - 2] + fibs[i - 1]);
//     }
//   }
//   return fibs[n];
// }

// recursive solution
// let fibs = [0, 1];
// function fib(n) {
//   if (fibs.length < n + 1) {
//     fibs.push(fibs[fibs.length-1] + fibs[fibs.length - 2]);
//     return fib(n);
//   } else {
//     return fibs[n];
//   }
// }

// alternate recursive solution with memoize

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

