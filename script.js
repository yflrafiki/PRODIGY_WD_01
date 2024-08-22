// Add scroll event listener
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // Check if page is scrolled more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

