const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.nav-links-active');

// navlinks.style.display = "none";
burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    if (navlinks.style.display != "flex") {
        navlinks.style.display = "flex";
    } else {
        navlinks.style.display = "none";
    }
})