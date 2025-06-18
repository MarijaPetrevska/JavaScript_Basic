//Empty array to store the contacts
let phoneBook = [];
// Function to add a contact to the phoneBook 
function addContact(name, number) {
  // Create a new contact Object
  let contact = {
    name: name,
    number: number,
  };

  // Add the contact to the phoneBook array by using the length property
  phoneBook[phoneBook.length] = contact;
  // The contact was added successfully
  console.log(`The contact for ${name} was added successfully!`);
}

// Function to show the phone book
function showPhoneBook() {
  console.log("\nPhone Book:");
  if (phoneBook.length === 0) {
    console.log("No contacts available.");
  } else {
    // Using a for loop to print each contact
    for (let i = 0; i < phoneBook.length; i++) {
      let contact = phoneBook[i];
      console.log(`Name: ${contact.name}, Phone Number: ${contact.number}`);
    }
  }
}

// Function to prompt the user to enter a contact's details
function askForContact() {
  // Get the name from the user
  let name = prompt(" Please enter the name of the contact:");
//Checking if the name is empty, prompt the user to enter a valid name.
  if (!name) {
    alert("Name cannot be empty. Please try again.");
    return;
  }
  // Get the phone number from the user
  let number = prompt("Please enter the phone number of the contact:");
   // Validate the phone number (it must be numeric and not empty)
  if (!number || isNaN(number)) {
    alert("Please enter a valid phone number (only digits).");
    return;
  }
  // Call the function to add the contact
  addContact(name, number);
}
// Ask the user how many contacts they would like to add
let numberOfContacts = prompt("How many contacts would you like to enter?");
//validate the number of contacts input
if (numberOfContacts && !isNaN(numberOfContacts) && numberOfContacts > 0) {
 //loop to ask the user for each contact's details
    for (let i = 0; i < numberOfContacts; i++) {
    askForContact();
  }
} else {
  alert("Invalid input. Please enter a positive number.");
}

// Show the phone book at the end
showPhoneBook();
