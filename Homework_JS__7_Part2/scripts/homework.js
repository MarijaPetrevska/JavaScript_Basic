//An array of numbers
//Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
let numbers = [2, 4, 5];
// Get the element to display the list of Numbers
let list = document.getElementById('listOfNumbers');
let resultParagraph = document.getElementById('sum');
let equationElement = document.getElementById('equation');


//Use a for loop to go through each number in the array
function printNumbersInList(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        list.innerHTML += `<li>${numbers[i]}</li>`;
    }
}

//Calculating the sum of the numbers
function printSum(numbers, element) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    element.innerHTML = `The sum of the numbers from the list is: ${sum}`;
}
// Function to display the full mathematical equation
function printMathEquation(numbers, element) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (i === numbers.length - 1) {
            element.innerText += ` ${numbers[i]} `
        }
        else {
            element.innerText += ` ${numbers[i]} + `
        }
    }
    element.innerText += ` = ${sum}`;
}

// Call the functions to display the numbers, sum, and equation
printNumbersInList(numbers);
printSum(numbers, resultParagraph);
printMathEquation(numbers, equationElement);






