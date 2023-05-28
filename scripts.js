function handleCallButtonClick(event) {
    if (!isMobileDevice()) {
      event.preventDefault();
      var contactSection = document.getElementById('Kontakt');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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