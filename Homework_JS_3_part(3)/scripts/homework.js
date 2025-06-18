//Function withdrawMoney
function withdrawMoney() {
  // Hardcoded balance is initialized to 1000
  let currentAmount = 1000;

  // Prompt the user to enter the withdrawal amount and use parseInt to ensure the input is treated as an integer
  let amountToTake = parseInt(
    prompt("Pleae enter here the amount you want to withdraw:")
  );
  // Checking if the entered amount is a valid number and greater than 0
  if (isNaN(amountToTake) || amountToTake <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  // amountToTake - the amount the user wants to withdraw
  // currentAmount - the available balance in the account
  if (amountToTake > currentAmount) {
    alert("Not enough money.");
  } else {
    // If the withdrawal is valid, subtract the amount taken from the current balance
    currentAmount = currentAmount - amountToTake;

    // Return the amount taken and the remaining balance to the user
    alert(
      `Amount taken is:  $${amountToTake}\nYour remaining balance is: $${currentAmount}`
    );
  }
}

// Call the function to test it
withdrawMoney();
