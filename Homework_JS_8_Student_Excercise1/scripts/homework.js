//STUDENT EXCERCISE #1

// Selecting the Button Element by its ID ('myButton') and assign it to the variable 'myButton'.
let myButton = document.getElementById("myButton");
// A function 'greet' that shows an alert with the message 'Hello Marija!'
function greet(){
  // Show an alert with the message "Hello Marija!"
    alert(`Hello Marija!`);
}
// When the button is clicked, the 'GREET' function will be called
myButton.onclick = greet;



