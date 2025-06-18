// HOMEWORK 11 - EXCERCISE 3

// ------------------------ Variables ------------------------

// Store the contacts array
let contacts = [];

// Error message element in the DOM
// I am using a const because the variable won't be reassigned.
// Assigning a value to errorMessage (a reference to a DOM element), and this reference will not change during the execution of the code.
const errorMessage = document.getElementById("errorMessage");

// ------------------------ Functions ------------------------

// Function to Save the contact when the form is submitted
function saveContact() {
  // Get values from the inputs
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

   // Log the values to check if they are captured correctly
   console.log("First Name:", firstName);
   console.log("Last Name:", lastName);
   console.log("Phone Number:", phoneNumber);

  // Basic validation for form fields: ensure no field is empty
  if (!firstName || !lastName || !phoneNumber) {
    // Show error if any field is missing
    errorMessage.textContent = "All fields are required!";
    // Exit the function if validation fails
    return;
  }
  // Validate first and last name (only letters and spaces allowed)
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(firstName)) {
    errorMessage.textContent =
      "First Name should only contain letters and spaces.";
    return;
  }
  if (!namePattern.test(lastName)) {
    errorMessage.textContent =
      "Last Name should only contain letters and spaces.";
    return;
  }
  // Validate a 10-digit phone number
  const phoneNumberPattern = /^[0-9]{10}$/;
  // Test if the phone number matches the pattern
  if (!phoneNumberPattern.test(phoneNumber)) {
    errorMessage.textContent = "Please enter a valid 10-digit phone number.";
    return;
  }

  // Clear error message if validation passes
  errorMessage.textContent = "";

  // Create a contact object with the form data
  const contact = {
    firstName,
    lastName,
    phoneNumber,
  };

  // Add the new contact to the contacts array
  contacts.push(contact);

  // Update the table display with the new contact list
  updateContactsTable();

  // Clear form fields after saving the contact
  document.getElementById("contactForm").reset();
}

// Function to update the contacts table with the latest list of contacts
function updateContactsTable() {
  // Get the table body where the contact rows will be inserted
  const tableBody = document
    .getElementById("contactsTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear the table before adding updated contacts

  // Using for loop to go through the contacts array and create a table row for each contact
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    // Create a new table row for each contact
    const row = document.createElement("tr");

    // Create cells for each contact detail
    // Create a cell for the first name and append it to the row
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = contact.firstName;
    row.appendChild(firstNameCell);

    // Create a cell for the last name and append it to the row
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = contact.lastName;
    row.appendChild(lastNameCell);

    // Create a cell for the phone number and append it to the row
    const phoneNumberCell = document.createElement("td");
    phoneNumberCell.textContent = contact.phoneNumber;
    row.appendChild(phoneNumberCell);

    // Create a cell for actions (Edit and Delete buttons)
    const actionsCell = document.createElement("td");
    // Create the Edit button and add an event listener to edit the contact
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      editContact(i);
    };
    actionsCell.appendChild(editButton);
    // Create the Delete button and add an event listener to delete the contact
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteContact(i);
    };
    actionsCell.appendChild(deleteButton);

    // Add the actions cell to the row
    row.appendChild(actionsCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  }
}

// Function to Delete a contact from the contacts array
function deleteContact(index) {
  // Create a new array that excludes the contact at the given index
  const newContacts = [];
  for (let i = 0; i < contacts.length; i++) {
    if (i !== index) {
      newContacts.push(contacts[i]);
    }
  }
  contacts = newContacts; // Replace the old array with the new one

  // Update table display
  updateContactsTable();
}

// Function to Edit a Contact by pre-filling the form and removing the contact from the array
function editContact(index) {
  const contact = contacts[index];

  // Pre-fill the form with contact data
  document.getElementById("firstName").value = contact.firstName;
  document.getElementById("lastName").value = contact.lastName;
  document.getElementById("phoneNumber").value = contact.phoneNumber;

  // Manually remove the contact from the array by moving all elements after the index one step to the left
  const newContacts = [];
  for (let i = 0; i < contacts.length; i++) {
    if (i !== index) {
      newContacts.push(contacts[i]);
    }
  }
  contacts = newContacts; // Replace the old array with the new one

  // Update table display
  updateContactsTable();
}

// ------------------------ Events ------------------------

// Event to save contact when the 'Save' button is clicked
document.querySelector("button").addEventListener("click", saveContact);
