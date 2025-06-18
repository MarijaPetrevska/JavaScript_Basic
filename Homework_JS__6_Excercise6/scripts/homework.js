// One student has 5 exams in the first semester. GRADES: 10,6,8,9,6.
// Function to check if the student passes the exam or not
function checkingPassedOrNot(grades){
  let sum=0;
  // Calculating the sum of the grades
  for(let i=0;i<grades.length;i++){
    sum=sum+grades[i];
  }
  // Calculating the average of the grades
  let average=sum/grades.length;
  // If the average is greater or equal to 8 => the student passed the semester
  if(average>=8){
    alert("The student has passed the semester!");
  }else{
    alert("The student has not passed the semester!");
  }
}


// Grades 
let grades=[10, 6, 8, 9, 6];
// Calling the function
checkingPassedOrNot(grades);
// Output
// The sum of the grades is 39, so the average is 7.8 => The student has not passed the semester.


