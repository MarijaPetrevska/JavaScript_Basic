//Function to find the maximum, minimum, and sum of valid numbers in an Array
function findMaxMin(array) {
//Initialize max and min as null 
  let max = null;
  let min = null;

// Loop through the array to find max and min values
  for (let i = 0; i < array.length; i++) {
    //Current element in the array
    let element = array[i];
    // Check if the element is a valid number (not NaN and of type 'number')
    if (typeof element === "number" && !isNaN(element)) {
      if (max === null || element > max) {
        max = element;
      }
      if (min === null || element < min) {
        min = element;
      }
    }
  }
  //If no valid numbers were found
  if (max === null || min === null) {
    return "There are no valid numbers in the array.";
  }
  //Calculate the sum of the max and min numbers
  let sum = max + min;
  //Return the result as a string
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}


let array = [3, 5, 6, 8, 11, "Qinshift", null, false, undefined, true];

console.log(findMaxMin(array)); 
