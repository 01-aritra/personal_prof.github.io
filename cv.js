// You can use JavaScript to add interactivity to your CV page
// For example, you could create a function that displays a message when a button is clicked

function showMessage() {
	alert("Thanks for visiting my CV page!");
}

// You can then add an event listener to the button to call the function
// For example, if you have a button with an id of "contact-button", you can add the following code:

var contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", showMessage);
