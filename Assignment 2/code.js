// Responsive Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('a');

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Close menu when a navigation link is clicked (bonus feature)
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
});
