// I defined a function to get the Chinese Zodiac sign
function zodiacChineseSign (year)
{
  // All the zodiac signs
  let zodiacSigns = [ 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

  // The formula of Chinese Zodiac calculation
  let calculateTheChineseZodiac=(year - 4) % 12;
  return zodiacSigns[calculateTheChineseZodiac];
}
// Prompt user for the birth year
let year = prompt("Enter your year of birth:");

// Checking if it is a valid number
let birthYear = parseInt(year);

if (isNaN(birthYear)) {
  console.log("Please enter a valid number.");
} else {
  // Calling the function here
  let zodiacSign=zodiacChineseSign(birthYear);
  console.log("The Chinese Zodiac sign for the year "+ birthYear +" is: " + zodiacSign +".");
}
