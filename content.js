// Function to remove the <ytd-popup-container> element
function removePopupContainer() {
    const popupContainer = document.querySelector('ytd-popup-container');
    if (popupContainer) {
      popupContainer.remove();
    }
  }
  
  // Listen for changes in URL (navigation)
  window.addEventListener('popstate', removePopupContainer);
  
  // Delete the element on initial page load
  removePopupContainer();