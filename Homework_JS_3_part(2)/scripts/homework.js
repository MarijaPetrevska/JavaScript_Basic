//Function to calculate the age in dog years or human years
function calculateAge(age, conversionChoice) {
  // Checking if the age is a valid number
  if (isNaN(age)) {
    console.log("Please enter a valid number.");
    return;
  }
  let result;
  // Check if the conversion choice is 'dog'
  if (conversionChoice === "dog") {
    result = age / 7;
    console.log(`A dog age of ${age} years is equal to ${result} human years.`);
    //  Check if the conversion choice is 'human'
  } else if (conversionChoice === "human") {
    result = age * 7;
    console.log(`A human age of ${age} years is equal to ${result} dog years.`);
  } else {
    // It will be invalid choice if it is not a dog or a human.
    console.log("Invalid conversion choice.");
  }
}

calculateAge(35, "dog");
calculateAge(5, "human");
calculateAge("text", "human");
calculateAge(5, "cat");
calculateAge("5a", "dog");
