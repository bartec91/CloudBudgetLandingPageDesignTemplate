/* Toggle Nav JavaScript */
const mainNav = document.getElementById('navbarToggle');
const navToggle = document.getElementById('btnToggle');

// Start by adding the class "collapse" to the mainNav
// mainNav.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainNavToggle() {
    mainNav.classList.toggle('collapse');
}

// Add a click event to run the mainNavToggle function
navToggle.addEventListener('click', mainNavToggle);