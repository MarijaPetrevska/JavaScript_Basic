let words = ["Hello", "there", "students", "of", "SEDC", "!"];

//Function to combine array elements into a single string
function sentence(array) {
  let result = ''; //empty string
  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // Add each word, each string to the result string
    result = result + array[i]; 
    // adding a space but not after the last word
    if (i < array.length - 1) {
      result = result + ' '; // Adding a space between words
    }
  }
  // return the final result here
  return result;
}
//Call the function with the 'words' array
let result = sentence(words);
//The Final result to the console
console.log(result); 

