// STUDENT EXCERCISE 3

// Access the input fields and elements
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submit");

// Check if the elements exist before using them
if (!firstNameInput || !lastNameInput || !emailInput || !passwordInput || !submitBtn) {
  console.error("One or more elements are missing from the DOM.");
} else {
  // Array to store registered users
  let users = [];

  // Function to collect user information and validate
  function getUserInfo() {
    // Collect values from the input fields 
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;

    // Validation: Check if any field is empty
    if (!firstName || !lastName || !email || !password) {
      return "Please fill in all fields.";
    }

    // Create a user object
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    // Add the user to the users array
    users.push(user);

    // Create a message indicating the user is registered
    let resultMessage = `User: ${firstName} ${lastName} with email ${email} is registered!`;

    // Clear the input fields for the next user
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";

    return resultMessage;
  }

  // Event listener for the Submit Button
  submitBtn.addEventListener("click", function(event) {
    // Prevent form submission behavior (in case it's inside a form)
    event.preventDefault();

    // Call the 'getUserInfo' function and display the result in the result paragraph
    result.innerText = getUserInfo();
  });
}

