document.querySelectorAll('img').forEach(img => {
    console.log("runs");
    img.onerror = function() {
        this.onerror = null;
        this.src = "../js/placeholder-image.jpg";
        this.alt = "Placeholder image for missing photo";
    };
});

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
   var button = dropdown.previousElementSibling;
   var isOpen = dropdown.style.display == 'block';
   
   // Toggle visibility of the dropdown menu
   dropdown.style.display = isOpen ? 'none' : 'block';

   button.setAttribute('aria-expanded', !isOpen);
 }

 // Handle keyboard interactions for dropdown
 function handleDropdownKeyboard(event, dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var links = dropdown.querySelectorAll('a');
  var focusedLinkIndex = Array.from(links).indexOf(document.activeElement);
 
 if (event.key === 'ArrowDown') {
   // Focus on the next link, or first link if at the end
   if (focusedLinkIndex === links.length - 1) {
     links[0].focus();
   } else {
     links[focusedLinkIndex + 1].focus();
   }
   event.preventDefault();
 } 
 
 else if (event.key === 'ArrowUp') {
   // Focus on the previous link, or last link if at the beginning
   if (focusedLinkIndex === 0) {
     links[links.length - 1].focus();
   } else {
     links[focusedLinkIndex - 1].focus();
   }
   event.preventDefault();
 } else if (event.key === 'Escape') {
   // Close the dropdown
   toggleDropdown(dropdownId);
   event.preventDefault();
 }
 }
