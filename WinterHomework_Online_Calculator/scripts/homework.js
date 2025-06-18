// WINTER HOMEWORK - ONLINE CALCULATOR

// 1. VARIABLES 
const display = document.getElementById('display'); 
let currentInput = ""; 

// 2. FUNCTIONS

// Updates the display with the current input.
function updateDisplay() {
  display.value = currentInput;
}

// Add Number
// Adds the number to the current input.
function addNumber(number) {
  currentInput = currentInput + number; // Add the number to the input
  updateDisplay(); // Update the display
}

// Add Decimal
// Adds a decimal point to the current input, only if there is no decimal point in the current number.
function addDecimal() {
  // Split current input at any operator 
  let parts = currentInput.split(/[\+\-\*\/]/);
  // Get the last number
  let currentNumber = parts[parts.length - 1]; 
  // Only add a decimal point if the current number does not already have one
  if (!currentNumber.includes('.')) {
    currentInput = currentInput + '.'; // Add the decimal point
    updateDisplay(); // Update the display
  }
}

// Add Operator
// Adds the operator to the current input.
function addOperator(operator) {
  if (currentInput.length > 0 && !isOperator(currentInput[currentInput.length - 1])) {
    currentInput += operator; // Add the operator to the input
    updateDisplay(); // Update the display
  }
}

// Checking
// Checks if the character is an operator.
function isOperator(currentCharacter) {
  return currentCharacter === '+' || currentCharacter === '-' || currentCharacter === '*' || currentCharacter === '/';
}

// Clear display
// Clears the current input.
function clearDisplay() {
  currentInput = ""; // Reset the input
  updateDisplay(); // Update the display
}

// Performs the calculation and updates the display with the result.
function calculate() {
  try {
    let result = processExpression(currentInput); // Process the input
    currentInput = result.toString(); // Convert result to string and update input
    updateDisplay(); // Update the display
  } catch (error) {
    currentInput = 'Error'; // Display error if something goes wrong
    updateDisplay(); // Update the display
  }
}

// Processes the expression by first handling multiplication and division, then addition and subtraction.
function processExpression(expression) {
  expression = processMultiplicationAndDivision(expression); // First, process multiplication and division
  return processAdditionAndSubtraction(expression); // Then, process addition and subtraction
}

// Processes multiplication and division in the expression.
function processMultiplicationAndDivision(expression) {
  let result = "";
  let temp = ""; // Temporary variable to hold numbers and operations
  let i = 0;

  while (i < expression.length) {
    if (expression[i] === '*' || expression[i] === '/') {
      let operator = expression[i];
      let left = parseFloat(temp); // Get the previous number
      let right = parseFloat(expression[i + 1]);
      // Perform multiplication or division
      if (operator === '*') {
        result = left * right;
      } else if (operator === '/') {
        result = (right === 0) ? 'Error' : left / right;
      }
      temp = result.toString(); // Store the result as a string
      i += 2; // Skip the next number since it's already processed
    } else {
      temp = temp + expression[i]; // Add current character to the temp number
      i++;
    }
  }
  return temp;
}

// Processes addition and subtraction in the expression.
function processAdditionAndSubtraction(expression) {
  let result = 0;
  let currentNumber = "";
  let operator = "+"; // Initial operator

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "+" || expression[i] === "-") {
      // Perform addition or subtraction based on the current operator
      if (operator === "+") {
        result += parseFloat(currentNumber);
      } else if (operator === "-") {
        result -= parseFloat(currentNumber);
      }
      operator = expression[i]; // Update the operator
      currentNumber = ""; // Reset the current number
    } else {
      currentNumber += expression[i]; // Build the current number
    }
  }

  // After the loop, handle the last number
  if (operator === "+") {
    result += parseFloat(currentNumber);
  } else if (operator === "-") {
    result -= parseFloat(currentNumber);
  }
  return result;
}

// Removes the last character from the current input (backspace functionality).
function backspace() {
  currentInput = currentInput.substring(0, currentInput.length - 1); // Remove the last character
  updateDisplay(); // Update the display
}

// 3. EVENTS
// Event handlers are embedded directly in the HTML as "onclick" attributes 




