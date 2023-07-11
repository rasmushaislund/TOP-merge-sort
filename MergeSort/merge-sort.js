// START //

const originalArray = [5, 2, 4, 1, 9, 3];

const subdivideArray = (arr) => {
  // Base-case for recursion
  if (arr.length <= 1) return arr;

  // Find mid-point of list/array and define how to keep subdividing left and right
  // sides of mid-point
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeSubArrays(subdivideArray(left), subdivideArray(right));
};

const mergeSubArrays = (left, right) => {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  // Two-way merge value comparison
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // If left array is larger than right array, push the remaining items to sortedArray
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }
  // If right array is larger than left array, push the remaining items to sortedArray
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }
  return sortedArray;
};

console.log(subdivideArray(originalArray)); // [1, 2, 3, 4, 5, 9]

// END //
