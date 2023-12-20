const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Get the modal and form elements
var modal = document.getElementById('myModal');
var registrationForm = document.getElementById('registrationForm');
var span = document.getElementsByClassName('close')[0];

// Display the modal when the form is submitted
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the default form submission
  modal.style.display = 'block';

  // Close the modal after 3 seconds (adjust as needed)
  setTimeout(function () {
    modal.style.display = 'none';
    // Redirect to the home page (replace 'home.html' with your actual home page URL)
    window.location.href = 'home.html';
  }, 3000);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
