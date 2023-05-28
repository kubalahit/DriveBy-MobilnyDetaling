function handleCallButtonClick(event) {
    event.preventDefault();
  
    if (!isMobileDevice()) {
      var contactSection = document.getElementById('Kontakt');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('Call button clicked!');
  }
  
  // Function to check if the device is a mobile device
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  
  // Function to initialize all the event listeners
  function initializeEventListeners() {
    var callButton = document.getElementById('call-button');
    callButton.addEventListener('click', handleCallButtonClick);
  
    // Add event listeners for other elements as needed
  }
  
  // Call the function to initialize the event listeners
  initializeEventListeners();