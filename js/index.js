document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.querySelector('input[type="checkbox"]');
    let currentLanguage = localStorage.getItem('language');


    if (currentLanguage === 'english') {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {

            window.location.href = "ingles.html";
            localStorage.setItem('language', 'english');
        } else {

            window.location.href = "index.html";
            localStorage.setItem('language', 'spanish');
        }
    });
});

const navToggle = document.querySelector(".nav_toggle");
navToggle.addEventListener("click", toggleNavigation);

const navMenu = document.querySelector(".nav_menu");

function toggleNavigation() {
    navMenu.classList.toggle("nav_menu_visible");
}

