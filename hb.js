const header = document.querySelector('.header-container'); // Select the header element

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY; // Get the current scroll position

  if (scrollY > 0) { // Check if scrolled down (positive scrollY)
    header.classList.add('hidden'); // Add a class for hiding (e.g., 'hidden')
  } else {
    header.classList.remove('hidden'); // Remove the hiding class when scrolled up
  }
});