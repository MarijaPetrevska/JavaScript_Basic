// Function to create an array of student full names.
function createStudentNames(firstNames, lastNames) {
  // empty array to hold the full names
  let fullNames = [];
 //  Loop through the firstNames array
  for (let i = 0; i < firstNames.length; i++) {
    // add a numeric prefix before the name (i+1)
    let fullName = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
    // Add the full name to the fullNames array
    fullNames.push(fullName); // Add the full name to the end of the array
  }
// Return the array with all full names
  return fullNames;
}

let first = ["Bob", "Jill","Marija"];
let last = ["Gregory", "Wurtz", "Petrevska"];
//  Call the function to create the full names of the students
let full = createStudentNames(first, last);
// The result here
console.log(full);  //Output the resulting array of full names to the console
