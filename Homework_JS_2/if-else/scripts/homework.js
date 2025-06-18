// Asked the user for input (year of birth).
let year = prompt("Enter your year of birth:");
// Converting to a number.
let birthYear = parseInt(year);
// Checking if the year of birth that was entered is valid or not
if (isNaN(birthYear)) {
  console.log("Invalid input. Please enter a valid year.");
} else {
  // Formula for Chinese Zodiac calculation
  let formulaForChineseZodiac = (birthYear - 4) % 12;

  // I used IF-ELSE structure to identify the Zodiac sign
  if (formulaForChineseZodiac === 0) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Rat.");
  } else if (formulaForChineseZodiac === 1) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Ox.");
  } else if (formulaForChineseZodiac === 2) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Tiger.");
  } else if (formulaForChineseZodiac === 3) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Rabbit.");
  } else if (formulaForChineseZodiac === 4) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Dragon.");
  } else if (formulaForChineseZodiac === 5) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Snake.");
  } else if (formulaForChineseZodiac === 6) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Horse.");
  } else if (formulaForChineseZodiac === 7) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Goat.");
  } else if (formulaForChineseZodiac === 8) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Monkey.");
  } else if (formulaForChineseZodiac === 9) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + "  is Rooster.");
  } else if (formulaForChineseZodiac === 10) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Dog.");
  } else if (formulaForChineseZodiac === 11) {
    console.log("The Chinese Zodiac sign for the year " + birthYear + " is Pig.");
  } 
}
