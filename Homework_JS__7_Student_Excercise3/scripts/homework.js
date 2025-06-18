// STUDENT EXERCISE - #3  => Student registry form
// Declare an array to store student objects
let students = [];

// The Student constructor function
function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// Function to display the list of students on the page
function showStudents(studentsArr, element) {
  element.innerHTML = "";
  for (let student of studentsArr) {
    // Add the student's details to the HTML element
    element.innerHTML += `<li><b>Name:</b> ${student.firstName} ${student.lastName},
    <b>Age:</b> ${student.age}</li>`;
  }
}

// Get references to the form and result elements
let studentForm = document.getElementById("studentForm");
let result = document.getElementById("result1");

// Add an event listener to the form's save button
studentForm.getElementsByTagName("button")[0].addEventListener("click", function () {
  let first = studentForm.children[0].value;
  let last = studentForm.children[1].value;
  let age = studentForm.children[2].value;

  // Check if any of the fields are empty 
  if (first === "" || last === "" || age === "") {
    alert("Please ensure all fields are filled out.");
    return; // Stop the function if any field is empty
  }

  // Create a new Student object using the form inputs
  let newStudent = new Student(first, last, age);

  // Add the new student to the students array
  students.push(newStudent);

  // Call the function to update the list of students displayed on the page
  showStudents(students, result.getElementsByTagName("ul")[0]);

  // Clear the form inputs
  studentForm.children[0].value = "";
  studentForm.children[1].value = "";
  studentForm.children[2].value = "";
});






