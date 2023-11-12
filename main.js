const mobileNavBtn = document.getElementById("mobile-nav");
const mobileNavContent = document.getElementById("mobile-content");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");

mobileNavBtn.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
    closeBtn.classList.toggle('show');
    openBtn.classList.toggle('hide');
    mobileNavContent.classList.toggle('visible');
}
