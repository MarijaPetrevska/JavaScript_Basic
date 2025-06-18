// HOMEWORK 10 AJAX

$(document).ready(function () {
  let getDataBtn = $("#getDataBtn");
  let searchBtn = $("#searchBtn");
  let searchInput = $("#searchInput");
  let tBody = $("#tableBody");

  // Fetch all users when "Get users" button is clicked using AJAX
  getDataBtn.click(function () {
    // Make an AJAX GET request to fetch all users from the API
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users", // URL of the API endpoint
      method: "GET", // HTTP method (GET request)
      success: function (users) {
        tBody.html(''); // Clear the table before adding new users
        // Loop through the users array and add each user to the table
        for (let i = 0; i < users.length; i++) {
          let user = users[i];
          // Append a new row to the table with the user's data
          tBody.append(
            `<tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.website}</td>
            </tr>`
          );
        }
      },
      error: function (err) {
        // If the request fails, error
        console.log(err);
      },
    });
  });

  // Event handler for the "Search" button click to fetch a specific user by ID
  searchBtn.click(function () {
    let userId = searchInput.val(); // Get the value from the input
    // Validate if the input is a number
    if (userId === "") {
      // Alert if no ID is entered
      alert("Please enter a user ID.");
    } else if (isNaN(userId)) {
      // Alert if the entered ID is not a number
      alert("Please enter a valid number - user ID.");
    } else {
      // Make an AJAX GET request to fetch a specific user by their ID
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${userId}`,
        method: "GET",
        success: function (user) {
          tBody.html(''); // Clear the table before adding the user
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
        },
        error: function (err) {
          // If the request fails, log the error to the console
          console.log(err);
        },
      });
    }
  });
});
