// Create a book object with properties and a method
// The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus.
function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  // Method to return the message
  this.getReadingStatus = function() {
      if (this.readingStatus) {
          return `Already read '${this.title}' by ${this.author}.`;
      } else {
          return `You still need to read '${this.title}' by ${this.author}.`;
      }
  };
}

let title = prompt("The book title is:");
let author = prompt("The author's name is:");
let readingStatusInput = prompt("Have you read this book? (yes/no)").toLowerCase();

// Ensure valid input for reading status
let readingStatus;

while (readingStatusInput !== "yes" && readingStatusInput !== "no") {
  // Loop until valid input is received
  readingStatusInput = prompt("Invalid input. Please enter 'yes' or 'no' for reading status.").toLowerCase();
}

if (readingStatusInput === "yes") {
  readingStatus = true;
} else if (readingStatusInput === "no") {
  readingStatus = false;
}

let book = new Book(title, author, readingStatus);
alert(book.getReadingStatus());