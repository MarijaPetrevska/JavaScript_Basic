// Function validate number
//Validate if the input is a valid number
function validateNumber(num) {
  return !isNaN(num);
}
//  Function that takes an array of 5 numbers as an argument and returns the sum.
function sum(numbers) {
  // Checking if the array has 5 numbers
  if (numbers.length !== 5) {
    alert("The array should contain 5 numbers.");
    return;
  }
  //Variable to store the sum
  let sum = 0;
   // Iterate through the array and validate each number
  for (let i = 0; i < numbers.length; i++) {
    //Validate the number at position i
    if (!validateNumber(numbers[i])) {
      alert(`Error messsage! "${numbers[i]}" is not a valid number. Please enter a number here.`);
      return;
    }
    sum = sum + numbers[i]; // Add valid number to the total sum
  }
  // I used alert to show the result
  alert("The sum of the numbers is: " + sum);
}
// Example of valid input
sum([5,8,9,12,48]); //valid array, will show the sum here

// Examples of invalid input
sum(["one", 2, 3, 4, 5]); //is not correct (invalid), it will show error here
sum([2,3,5]); //is not correct (invalid), error
sum([5,10,15,20]); //is not correct (invalid), error
