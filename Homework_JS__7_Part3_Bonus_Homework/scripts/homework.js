// BONUS HOMEWORK

// Create a recipe page from inputs

// Function to prompt the user for recipe details and show them
function createRecipePage() {
  // Asking the user for the recipe name
  let recipeName = prompt("What is the name of the recipe?");

  // Validate recipe name
  if (!recipeName || !isNaN(recipeName)) {
    alert("Please enter a valid recipe name.");
    return; // Stop if recipe name is empty
  }

  // Ask the user how many ingredients they need
  let numIngredients;

  // Continue prompting until a valid number of ingredients is entered
  while (true) {
    numIngredients = prompt("How many ingredients does the recipe need?");

    // Check if the input is a valid number and greater than 0
    if (!numIngredients || isNaN(numIngredients) || numIngredients <= 0) {
      alert("Please enter a valid number of ingredients (greater than 0).");
    } else {
      numIngredients = parseInt(numIngredients); // Convert the input to an integer
      break; // Break out of the loop if the number is valid
    }
  }

  // Creating an array to hold the ingredients
  let ingredients = [];

  // Asking for each ingredient's name using a basic for loop
  for (let i = 0; i < numIngredients; i++) {
    let ingredient = prompt(`Please enter the name of ingredient #${i + 1}:`);

    // Validate ingredient input: it should not be empty and not a number
    if (!ingredient) {
      alert("Ingredient cannot be empty. Please enter a valid ingredient.");
      return; // Stop if ingredient is empty
    }

    // Check if the ingredient is just a number
    if (!isNaN(ingredient)) {
      alert(
        "Ingredient cannot be a number. Please enter a valid ingredient name."
      );
      return; // Stop if ingredient is a number
    }

    ingredients.push(ingredient);
  }

  // Access the HTML element where the recipe information will be displayed
  let recipeContainer = document.getElementById("recipe-container");

  // Clear any previous content
  recipeContainer.innerHTML = "";

  // Creating the HTML content for the recipe page
  let recipeContent = `<h2>${recipeName}</h2>`; // Recipe name as a heading

  // Start table and add a header row
  recipeContent += `<table border="1"><tr><th>Ingredients</th></tr>`;

  // Loop through the ingredients array and add them to the table
  for (let i = 0; i < ingredients.length; i++) {
    // Add each ingredient as a table row
    recipeContent += `<tr><td>${ingredients[i]}</td></tr>`;
  }

  recipeContent += `</table>`; // Close the table

  // Add the content to the recipe container
  recipeContainer.innerHTML = recipeContent;
}

// Call the function to create the recipe page
createRecipePage();
