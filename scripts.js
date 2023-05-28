// scripts.js

// Function to handle the click event of the "Call us" button
function handleCallButtonClick(event) {
    event.preventDefault();
  
    if (!(/Mobi|Android/i.test(navigator.userAgent))) {
      var contactSection = document.getElementById('contact-section');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Function to initialize all the event listeners
  function initializeEventListeners() {
    var callButton = document.getElementById('call-button');
    callButton.addEventListener('click', handleCallButtonClick);
  
    // Add event listeners for other elements as needed
  }
  
  // Call the function to initialize the event listeners
  initializeEventListeners();