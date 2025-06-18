
// Function called calculator
// 3 parameters: firstNum, secondNum and operator
function calculator(firstNum, secondNum, operator) {

  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  
  // Check if the inputs are valid numbers
  if (isNaN(firstNum) || isNaN(secondNum)) {
    return "Both inputs must be valid numbers!";
  }
// Depending of the operator, return the result.
  switch (operator) {
    case "+":
      return firstNum + secondNum;
      break;
    case "-":
      return firstNum - secondNum;
      break;
    case "*":
      return firstNum * secondNum;
      break;
    case "/":
      if (secondNum === 0) {
        return "Cannot divide by zero!";
      }
      return firstNum / secondNum;
      break;
    default:
      return "Invalid operator! Use the operators +, -, *, or /.";
      break;
  }
}

console.log(calculator(10, 20, "+"));       
console.log(calculator(15, 7, "-"));        
console.log(calculator("7", "8", "*"));      
console.log(calculator(64, 8, "/"));         
console.log(calculator(64, 0, "/"));         
console.log(calculator("10", "20", "+"));    
console.log(calculator("abc", "20", "+")); 
console.log(calculator("5", "text", "+")); 
console.log(calculator("text1", "text2", "+")); 
console.log(calculator(10, "30a", "%"));   

