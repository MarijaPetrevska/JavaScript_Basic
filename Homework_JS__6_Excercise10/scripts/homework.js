// Academy Entity
// Constructor function
function Academy (academyName, numberOfGroups, numberOfClassrooms) {
  // Academy's name
    this.academyName = academyName;
    // Number of groups
    this.numberOfGroups = numberOfGroups;
    // Number of Classrooms
    this.numberOfClassrooms = numberOfClassrooms;

  // Method to display AcademyName
  this.displayAcademyName=function() {
    console.log("Academy Name: " + this.academyName);
  }
}
function Group (name, numberOfStudents, students) {
    this.name = name;
    this.numberOfStudents = numberOfStudents;
    this.students = students;

  // Method to display the number of students in the group
    this.displayNumberOfStudents=function() {
    console.log("Number of students in the " + this.name + ": " + this.numberOfStudents);
  }
}

function Student (firstName, lastName, age, email, academy, group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.academy = academy;  
    this.group = group;  
  // Method to display the student's academy
   this.displayAcademy=function() {
    console.log(this.firstName + " " + this.lastName + " is enrolled at " + this.academy.academyName+".");
  }
}

// an Academy object
let myAcademy = new Academy("Qinshift Academy", 7, 12);

// Creating Group objects
let group1 = new Group("Group G1", 30, []);
let group2 = new Group("Group G2", 25, []);
let group3 = new Group("Group G3", 30, []);
let group4 = new Group("Group G4", 25, []);
let group5 = new Group("Group G5", 30, []);
let group6 = new Group("Group G6", 25, []);
let group7 = new Group("Group G7", 25, []);

// Creating Student objects
let student1 = new Student("Marija", "Petrevska", 26, "marijapetrevska25@gmail.com", myAcademy, group1);
let student2 = new Student("Ivana", "Smith", 28, "ivana.smith@gmail.com", myAcademy, group2);
let student3 = new Student("Sophia", "Brown", 25, "sophiabrown@gmail.com", myAcademy, group3);
let student4 = new Student("Amelia", "Davis", 20, "amelia_davis@example.com", myAcademy, group4);
let student5 = new Student("Lee", "Jackson", 19, "jackson.lee@example.com", myAcademy, group5);
let student6 = new Student("Lori", "Young", 45, "loriyoung@example.com", myAcademy, group6);
let student7 = new Student("Thomas", "Anderson", 22, "thomas.anderson23@example.com", myAcademy, group7);

// Students to the Groups
group1.students.push(student2);
group2.students.push(student1);
group3.students.push(student3);
group7.students.push(student4);
group6.students.push(student6);
group4.students.push(student7);

// Output the details to the console
// Academy Name
myAcademy.displayAcademyName(); 
// Student's Academy
student1.displayAcademy(); 
// Number of students in group 2
group2.displayNumberOfStudents(); 


