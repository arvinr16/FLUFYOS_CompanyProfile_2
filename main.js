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

document.addEventListener("DOMContentLoaded", () => {
    const mediaQuery = window.matchMedia("(min-width: 372px)");
    const imgContainer = document.querySelector(".div-landing-img");
    const image = imgContainer?.querySelector("img");
    const target = document.querySelector(".btn-landing");

    const originalParent = image?.parentNode;
    const originalNextSibling = image?.nextSibling;

    function handleResize(e) {
        if(!image || !target || !originalParent) return;

        if(e.matches) {
            target.parentNode.insertBefore(image, target);
        } else {
            if(originalNextSibling) {
                originalParent.insertBefore(image, originalNextSibling);
            } else {
                originalParent.appendChild(image);
            }
        }
    }

    handleResize(mediaQuery);

    mediaQuery.addEventListener("change", handleResize);
});