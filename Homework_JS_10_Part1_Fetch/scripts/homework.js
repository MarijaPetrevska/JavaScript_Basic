// HOMEWORK 10 FETCH

$(document).ready(function () {
  // Select elements for buttons and table body
  let getDataBtn = $("#getDataBtn");
  let searchBtn = $("#searchBtn");
  let searchInput = $("#searchInput");
  let tBody = $("#tableBody");
  // Fetch all users when "Get users" button is clicked
  getDataBtn.click(function () {
     // Fetch data from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) // => Convert the response to JSON
      .then((users) => {
        // Clear the table before adding new users using innerHTML
        tBody[0].innerHTML = "";
        // for loop
        for (let i = 0; i < users.length; i++) {
          let user = users[i]; // Get each user object
          tBody.append(
            // Create a new table row with user data
            `<tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.website}</td>
            </tr>`
          );
        }
      })
      .catch((err) => {
        console.log(err);
        // Show an error message 
        tBody.append('<tr><td colspan="5" class="text-center">Error loading users. Please try again.</td></tr>');
      });
  });
  // Search for a user by ID when the "Search" button is clicked
  searchBtn.click(function () {
    let userId = searchInput.val(); // Get the value from the input 

    // Validate if the input is a number
    if (userId && !isNaN(userId)) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((user) => {
          // Clear the table before adding the user using innerHTML
          tBody[0].innerHTML = "";
          if (user.id) {
            // Display the specific user in the table
            tBody.append(
              `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.website}</td>
              </tr>`
            );
          } else {
            // Handle case where no user is found 
            tBody.append(
              `<tr><td colspan="5" class="text-center">User not found</td></tr>`
            );
          }
        })
        .catch((err) => {
          console.log(err);
          tBody.append('<tr><td colspan="5" class="text-center">Error searching for user. Please try again.</td></tr>');
        });
    } else {
      // If the input is not a valid number, alert the user
      alert("Please enter a valid numeric user ID.");
    }
  });
});