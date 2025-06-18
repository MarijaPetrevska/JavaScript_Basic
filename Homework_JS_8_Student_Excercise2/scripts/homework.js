//STUDENT EXCERCISE #2

// Function to change paragraph style
function changeStyle() {
  let paragraph = document.getElementById("myParagraph");

  // Change the Paragraph's styles
  // Change text color
  paragraph.style.color = "white";
  // Change background color
  paragraph.style.backgroundColor = "green";
  // Change font size
  paragraph.style.fontSize = "34px"; 
}

// Add event listener to the button
document.getElementById("myBtn").addEventListener("click", changeStyle);
