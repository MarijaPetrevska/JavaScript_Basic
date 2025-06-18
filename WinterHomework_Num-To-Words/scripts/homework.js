// WINTER HOMEWORK - Numbers to Words

// Function to Convert a Number into Words
function getWordsFromNumber(n) {
  // If the number is negative, return false (as the function does not handle negative numbers)
  if (n < 0) return false;
  // Arrays to map numbers to their words (Single digits, Double digits (10-19), Numbers below 100 (20, 30, ..., 90),
  // and Large number categories (Thousand, Million, Billion)
  const single_digit = [
    "", // For 0
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const double_digit = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const below_hundred = [
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const bigNumberWords = ["", "Thousand", "Million", "Billion"];

  // Special case for 0
  if (n === 0) return "Zero";

  let result = "";
  let group = 0;
  // Loop through the number in groups of 3 digits (thousands, millions ...)
  while (n > 0) {
    let part = ""; // Holds the word representation for the current group of 3 digits
    let remainder = n % 1000; // Get the current group (last 3 digits)
    // If there is any number to process in the current group
    if (remainder > 0) {
      let hundred = parseInt(remainder / 100);
      let ten = parseInt((remainder % 100) / 10);
      let one = remainder % 10;
      // If there is a hundred's place, add the appropriate word
      if (hundred > 0) {
        part = part + single_digit[hundred] + " Hundred";
      }
      // If the tens place is 2 or more, use the corresponding word for tens (20-90)
      if (ten >= 2) {
        if (part) {
          part = part + " ";
        }
        part = part + below_hundred[ten - 2];
        // If there is a ones place, add the appropriate word
        if (one > 0) {
          part = part + " " + single_digit[one];
        }
      }
      // If the tens place is 1 (10-19), use the words for numbers between 10 and 19
      else if (ten === 1) {
        if (part) {
          part = part + " ";
        }
        part = part + double_digit[one];
      }
      // If the ones place is greater than 0, add the appropriate word
      else if (one > 0) {
        if (part) {
          part = part + " ";
        }
        part = part + single_digit[one];
      }
      // If the group is larger than 0 (thousands, millions ...), append the appropriate word
      if (bigNumberWords[group]) {
        part = part + " " + bigNumberWords[group];
      }
    }
    // If there is any valid part in this group, add it to the final result
    if (part) {
      if (result) {
        result = part + " " + result;
      } else {
        result = part;
      }
    }
    // Remove the last 3 digits (group) from the number to move to the next group
    n = parseInt(n / 1000);
    group++;
  }
  // Return the final result
  return result + ".";
}

// Function to call the conversion when the user enters a number

function convertToWords() {
  // Get the value from the input and parse it as an integer
  const input = document.getElementById("numberInput").value;
  const num = parseInt(input);
  // Check if the input is a valid number
  if (isNaN(num)) {
    document.getElementById("result").textContent =
      "Please enter a valid number."; // If not, Display an error message
  } else {
    document.getElementById("result").textContent =
      "In words: " + getWordsFromNumber(num); // If valid, Display the number in words
  }
}
