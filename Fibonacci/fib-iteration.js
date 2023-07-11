// START //

const fibs = (n) => {
  // As defined by the recurrence relation F(0) = 0 and F(1) = 1
  let fibArray = [0, 1];

  if (n === 0) return [0];
  if (n === 1) return fibArray;

  // Using iteration to find F(n) = F(n - 1) + F(n - 2) when n > 1
  for (let i = 2; i <= n; i++) {
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
  }

  return fibArray;
};

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]

// END //
