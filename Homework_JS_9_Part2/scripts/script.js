// Homework 9 - Part 2
// Create a header generator
$(document).ready(function(){
    // When the "Generate H1" button is clicked
    $('#generate-btn').click(function() {
        // Get the values entered in the text and color input fields
        let headerText = $('#header-text').val();
        let headerColor = $('#header-color').val();
        let message = '';
        // Checking if the text and color are both entered (checking if either the header text or the color is empty)
        if (headerText == "" || headerColor == "") {
            // If either field is empty, set an ERROR message
            message = 'Text and color are both required.';
            // Display the error message in the <h3> element
            $('#message').text(message);
            // Clear the previous content in the header display container
            $('#header-display').html(""); 
            return;
        }
        // Check if the entered color is a valid named color or a valid hex color
        let colorOptions = ["red", "blue", "violet", "green", "yellow", "black", "white", "pink"];
        // Hex color codes
        let hexColorRegex = /^#[0-9A-F]{6}$/i; 
        // Checking if the entered color is a valid named color or matches the hex color pattern
        // Example: #25a3ed;
        if (colorOptions.indexOf(headerColor.toLowerCase()) === -1 && !hexColorRegex.test(headerColor)) {
            // If not a valid color or hex code, show an error message
            message = 'Please enter a valid color or hex code.';
            $('#message').text(message);
            // Clear any previous headers
            $('#header-display').html(""); 
            return;
        }
        // If everything is valid, clear any previous message
        $('#message').text('');
        // Create a new h1 element with the provided text and color
        let newHeader = $('<h1></h1>').text(headerText).css('color', headerColor);
        // Append new header
        $('#header-display').html(newHeader); 
    });
});