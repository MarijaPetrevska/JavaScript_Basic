// WINTER HOMEWORK 
// Numbers in words To Numbers as Digits

// I tried one more method of converting the numbers where they are into words and in the result shows the numbers as digits.

// Function to convert number words into digits
function wordsToNumber(words) {
  // Arrays for Ones, Tens, and Thousands
  // Define valid mappings for number words using simple arrays
  const ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
                "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", 
                "eighteen", "nineteen"];
  const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const thousands = ["thousand", "million", "billion"];

  // Normalize the input string (convert to lowercase and remove "and")
  words = words.toLowerCase().replace(/\band\b/g, '').split(' ');

  let result = 0;
  let temp = 0; // Temporary storage for numbers smaller than a thousand

  // Parse the valid words
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // Check if the word is in the "ones" array
    if (word === ones[0]) { temp += 1; }
    else if (word === ones[1]) { temp += 2; }
    else if (word === ones[2]) { temp += 3; }
    else if (word === ones[3]) { temp += 4; }
    else if (word === ones[4]) { temp += 5; }
    else if (word === ones[5]) { temp += 6; }
    else if (word === ones[6]) { temp += 7; }
    else if (word === ones[7]) { temp += 8; }
    else if (word === ones[8]) { temp += 9; }
    else if (word === ones[9]) { temp += 10; }
    else if (word === ones[10]) { temp += 11; }
    else if (word === ones[11]) { temp += 12; }
    else if (word === ones[12]) { temp += 13; }
    else if (word === ones[13]) { temp += 14; }
    else if (word === ones[14]) { temp += 15; }
    else if (word === ones[15]) { temp += 16; }
    else if (word === ones[16]) { temp += 17; }
    else if (word === ones[17]) { temp += 18; }
    else if (word === ones[18]) { temp += 19; }
    
    // Check if the word is in the "tens" array
    else if (word === tens[0]) { temp += 20; }
    else if (word === tens[1]) { temp += 30; }
    else if (word === tens[2]) { temp += 40; }
    else if (word === tens[3]) { temp += 50; }
    else if (word === tens[4]) { temp += 60; }
    else if (word === tens[5]) { temp += 70; }
    else if (word === tens[6]) { temp += 80; }
    else if (word === tens[7]) { temp += 90; }

    // Handle "hundred" as a place value multiplier
    else if (word === "hundred") {
      temp *= 100;
    }
    
    // Checking if the word is a place value like "thousand", "million", etc.
    else if (word === "thousand") {
      result += temp * 1000;
      temp = 0; // Reset temp 
    }
    else if (word === "million") {
      result += temp * 1000000;
      temp = 0; // Reset temp 
    }
    else if (word === "billion") {
      result += temp * 1000000000;
      temp = 0; // Reset temp
    }
    else {
      return "This is invalid!!!";
    }
  }

  return result + temp; // Return the final result after adding any remaining value in temp

}
// Function to handle the conversion from words to digits
function convert() {
  // Get User Input
  const userInput = document.getElementById('numberInput').value;
  // Call wordsToNumber function to convert input
  const result = wordsToNumber(userInput);
  // Display result
  document.getElementById('result').textContent = `The number is: ${result}`;
}
