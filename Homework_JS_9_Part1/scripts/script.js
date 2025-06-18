// Homework Part 1
// Create a Greeting App with Jquery
// 1. Create an input
// 2. Create a button
// 3. When clicked the button should print a greet message in an h1 header
// Example output: Hello there Marija!
// We must use JQuery for this Task


// When the button is clicked
$('#greetBtn').click(function() {
    // Get the value from the input field with the id 'name'
    let userName = $('#name').val();
    // Check if the input is empty
    if (userName === '') {
        // If the input is empty, prompt the user to enter their name
        $('#greeting').text('Please enter your name.');
    }
    // Check if the input is a number (using isNaN to check if it’s not a number)
    else if (!isNaN(userName)) {
        // If the input is a number, show a message saying "Please enter a name, not a number."
        $('#greeting').text('Please enter a name, not a number.');
    }
    else {
        // If the input is neither empty nor a number, it will display a greeting message with the user's name
        $('#greeting').text('Hello there ' + userName + '!');
    }
});
