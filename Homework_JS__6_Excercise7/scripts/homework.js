// Array of 10 elements
let array = [5, 10, null, false, undefined, NaN, "", 4.5, "Marija", 10];
// Creating an empty array
let truthyArray = [];
// Loop through each element in the original array
for (let i = 0; i < array.length; i++) {
  // If the element is truthy, add it to the truthyArray
  if (array[i]) {
    truthyArray.push(array[i]);
  }
}
// In the output, the falsy values will be removed.
console.log(truthyArray);
