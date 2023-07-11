// START //

const fibsRec = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  else {
    // Using spread operator '...'
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 1] + fibsRec(n - 2)[n - 2]];
  }
};

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]

// END //
