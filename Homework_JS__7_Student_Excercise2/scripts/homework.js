// STUDENT EXERCISE - #2  => Weight calculator in chickens
// Function to calculate the weight in chickens
function weightInChickens() {
  // Prompt the user for input in kilograms
  let weightInKg = parseFloat(prompt("Please enter your weight in kilograms:"));
  // Check if input is valid
  if (isNaN(weightInKg) || weightInKg <= 0) {
      document.getElementById("result").innerText = "Please enter a valid weight in kilograms.";
      return;
  }
  // 1 chicken weighs 0.5 kg, so calculate the weight in chickens
  let weightInChickens = weightInKg / 0.5;
  // Display the result in the div with the ID "result"
  document.getElementById("result").innerText = `Your weight in chickens is: ${weightInChickens} chickens.`;
}
// Added event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
  weightInChickens();
});





