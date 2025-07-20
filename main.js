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
    const imgContainer = document.querySelector(".div-landing-img");
    const image = imgContainer?.querySelector("img");
    const target = document.querySelector(".btn-landing");

    if (!image || !target) return;

    // Simpan posisi awal
    const originalParent = image.parentNode;
    const originalNextSibling = image.nextSibling;

    const mediaQuery = window.matchMedia("(max-width: 958px)");

    function handleResize(e) {
        if (e.matches) {
            // Layar max-width: 958px → pindah sebelum tombol
            target.parentNode.insertBefore(image, target);
        } else {
            // Layar min-width: 958px → kembalikan ke posisi awal
            if (originalNextSibling && originalNextSibling.parentNode === originalParent) {
                originalParent.insertBefore(image, originalNextSibling);
            } else {
                originalParent.appendChild(image);
            }
        }
    }

    // Jalankan saat pertama kali
    handleResize(mediaQuery);

    // Dengarkan perubahan media query
    mediaQuery.addEventListener("change", handleResize);
});