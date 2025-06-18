// Array to hold the ToDo list
let todoList = [];
// Function to add a new ToDo
function insertTodo() {
  // Prompt the user to enter a new todo item
  let todo = prompt("Enter your next ToDo (or leave empty to stop):");
  // Check if the user entered a valid todo (not empty)
  if (todo) {
    // Add the entered todo to the todoList array
    todoList.push(todo);
    console.log(`Your task has been added: ${todo}`);
  }
  return todo;
}

// Function to display all ToDos
function displayTodos() {
  // If the todo list is empty, it will print a message
  if (todoList.length === 0) {
    console.log("Your ToDo list is empty. No ToDos available.");
  } else {
    // If there are todos, print them one by one
    console.log("Your ToDo list: ");
    // Using a for loop to iterate through the array
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  }
}

// Start adding todos
let userInput = "";
do {
  //Ask the user to enter a new todo
  userInput = insertTodo(); 
} while (userInput !== ""); // Continue the loop until the user enters an empty input

//  Display all todos once finished adding them.
displayTodos();
