// Asked the user for input (year of birth).
let year = prompt("Enter your year of birth:");
// Converting to a number.
let birthYear = parseInt(year);
// Checking if the entered year of birth is valid or not
if (isNaN(birthYear)) {
  console.log("Please enter a valid number.");
} else {
  // Calculate the Zodiac sign by using the formula.
  let formulaForChineseZodiac = (birthYear - 4) % 12;

  // Using Switch Statement
  switch (formulaForChineseZodiac) {
    case 0:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Rat."
      );
      break; //stops checking once the correct case is found.
    case 1:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Ox."
      );
      break;
    case 2:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Tiger."
      );
      break;
    case 3:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Rabbit."
      );
      break;
    case 4:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Dragon."
      );
      break;
    case 5:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Snake."
      );
      break;
    case 6:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Horse."
      );
      break;
    case 7:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Goat."
      );
      break;
    case 8:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Monkey."
      );
      break;
    case 9:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + "  is Rooster."
      );
      break;
    case 10:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Dog."
      );
      break;
    case 11:
      console.log(
        "The Chinese Zodiac sign for the year " + birthYear + " is Pig."
      );
      break;
    // If something goes wrong, it will display an error message
    default:
      console.log("Something is wrong, please check your input again.");
      break;
  }
}
