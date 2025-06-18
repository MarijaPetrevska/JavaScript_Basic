// // // STUDENT EXERCISE - #1  => Manipulate the DOM
// 1. Select the first div
let firstDiv = document.querySelector('#first');

// 2. Select all paragraphs
let allParagraphs = document.querySelectorAll('p');

// 3. Select the last div
// let lastDiv =  document.getElementsByTagName("body")[0].lastElementChild;
let divs = document.getElementsByTagName("div");
let lastDiv = divs[divs.length - 1];

// 4. Select the header 3 in the last div
let header3 = lastDiv.querySelector('h3');

// 5. Select the header 1 in the last div
let header1 = lastDiv.querySelector('h1'); 

// 6. Get the text from the first paragraph in the second div
let firstParagraphInSecondDiv = document.querySelector('.anotherDiv p');
// Prints the text of the first paragraph in the second div
console.log(firstParagraphInSecondDiv.textContent); 

// 7. Add the word "text" to the text element in the second div
let textElement = document.querySelector('.anotherDiv text');
textElement.textContent += ' text';

// 8. Change the text of the header 1 in the last div
header1.textContent = 'Text added from JS.';

// 9. Change the text of the header 3 in the last div
header3.textContent = 'Text added from JS also';