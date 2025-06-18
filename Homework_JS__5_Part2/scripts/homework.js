// OBJECT animal with 2 properties and 1 method:
let animal = {
  name: "",  
  kind: "",  
  //Method to make the animal speak
  speak: function(message) {
      console.log(`${this.kind} says: '${message}'`);
  }
};

// Prompt the user to input the animal's name and kind
animal.name = prompt("Please enter the animal's name:");
animal.kind = prompt("Which animal is this (e.g., dog, cat)?");
//Call the speak method with a message
let message = prompt("Enter a message for the animal to say:");
animal.speak(message);