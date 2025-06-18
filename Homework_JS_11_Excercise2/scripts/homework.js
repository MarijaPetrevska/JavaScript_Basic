// EXCERCISE 2 - HOMEWORK 2

// ======== VARIABLES =========
// Array that holds are the expenses
let expenses = [];

// ========= FUNCTIONS =========

// EXPENSE CONSTRUCTOR FUNCTION 
// This constructor is used to create each expense object with its details
function Expense(description, amount, category) {
  this.description = description; //The description of the expense
  this.amount = amount; //The amount
  this.category = category; //The category
  this.deleted = false; // A flag to mark if the expense has been deleted
}

// ADD EXPENSE FUNCTION 
function addExpense(event) {
event.preventDefault(); // Prevent form submission

// Get the form values entered by the user
const description = document.getElementById('description').value;
const amount = parseFloat(document.getElementById('amount').value);
const category = document.getElementById('category').value;

// New Expense Object using the form values 
const newExpense = new Expense(description, amount, category);

// Add expense to the expenses array
expenses.push(newExpense);

// Reset form
document.getElementById('expenseForm').reset();

// Update the UI (Re-render the expense list)
renderExpenseTable();
}

// Function to Render Expenses
// This function displays all the expenses in the table
function renderExpenseTable() {
const expenseList = document.getElementById('expenseList');
const totalExpenses = document.getElementById('totalExpenses');

// Clear the table body
expenseList.innerHTML = '';

// Variable to keep track of the total sum of expenses
let total = 0;

// Loop through the expenses array and create rows to the table for each expense
for (let i = 0; i < expenses.length; i++) {
  const expense = expenses[i];
  if (!expense.deleted) { // Only show non-deleted expenses
    const row = document.createElement('tr');
    // Add data for each column in the row
    row.innerHTML = `
      <td>${expense.description}</td>
      <td>$${formatAmount(expense.amount)}</td>
      <td>${expense.category}</td>
      <td><button class="button" onclick="deleteExpense(${i})">Delete</button></td>
    `;
    // Append the row to the table body
    expenseList.appendChild(row);

    // Add to the total sum
    total = total+ expense.amount;
  }
}

// Update the total expenses summary
totalExpenses.textContent = formatAmount(total);
}

// Function to Delete an Expense
// This function marks the expense as deleted when the "Delete" button is clicked
function deleteExpense(index) {
// Mark the expense as deleted (it won't be removed from the array)
expenses[index].deleted = true;
// Re-render the expenses list
renderExpenseTable();
}

// Function to Format Amount to Two Decimal Places
// This function ensures that the amount is displayed with two decimal places
function formatAmount(amount) {
// Multiply by 100, round it, and divide by 100
const roundedAmount = Math.round(amount * 100) / 100;

// Return the amount formatted with 2 decimal places without the "$"
return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

// ========== EVENTS ==========

// Event Listener for the Add Expense Form
// This listens for the form submit event and calls the addExpense function
document.getElementById('expenseForm').addEventListener('submit', addExpense);

// Initial Render
// This ensures the expenses list and total are updated when the page first loads
renderExpenseTable();
