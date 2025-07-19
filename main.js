const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-link');

// Toggle open/close menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLink.classList.toggle('open');
});

// Close menu if click outside navbar area
document.addEventListener('click', (e) => {
    const isClickInsideNav = e.target.closest('.navbar');
    if(!isClickInsideNav) {
        hamburger.classList.remove('active');
        navLink.classList.remove('open');
    }
});