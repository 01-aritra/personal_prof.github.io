
// JavaScript Code for Interactivity:
// Code for toggling the visibility of the "About Me" section
var aboutMeSection = document.querySelector("aside section:first-of-type");
var toggleAboutMeButton = document.querySelector("aside h2:first-of-type");

toggleAboutMeButton.addEventListener("click", function() {
aboutMeSection.classList.toggle("hidden");
});

// Code for displaying a message when clicking on the "Contact" link
var contactLink = document.querySelector("nav a:last-of-type");

contactLink.addEventListener("click", function(event) {
event.preventDefault();
alert("Sorry, the contact form is not yet available.");
});