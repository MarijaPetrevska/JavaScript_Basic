// Homework 1
// Function createTable
function createTable() {
  // Get user input values (number of rows and columns)
  const rows = document.getElementById("numRows").value;
  const cols = document.getElementById("numCols").value;
  
  // Validate the input values
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please provide valid numbers for rows and columns.");
    return;
  }

  // Start building the HTML string for the table
  let tableStructure = "<table border='1'>";
  
  // Loop through the rows
  for (let i = 1; i <= rows; i++) {
    // Start a new row
    tableStructure = tableStructure + "<tr>";
    
    // Loop through the columns
    for (let j = 1; j <= cols; j++) {
      // Add a cell with row and column info
      tableStructure = tableStructure + `<td>Row-${i} Column-${j}</td>`;
    }
    
    // End the current row (tr tag)
    tableStructure = tableStructure + "</tr>";
  }

  // End the table (table tag)
  tableStructure = tableStructure + "</table>";

  // Set the table HTML to the container
  document.getElementById("table-container").innerHTML = tableStructure;

  // Hide the input fields and button after the table is created
  document.getElementById("numRows").style.display = 'none';
  document.getElementById("numCols").style.display = 'none';
  document.querySelector("button").style.display = 'none';
}

