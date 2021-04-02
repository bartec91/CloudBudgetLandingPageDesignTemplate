(() => {
    /* Toggle Nav JavaScript */
    const mainNav = document.getElementById('navbarToggle');
    const navToggle = document.getElementById('btnToggle');

    let mainNavToggle = () => {
        mainNav.classList.toggle('collapse');
    };

    // Add a click event to run the mainNavToggle function
    navToggle.addEventListener('click', mainNavToggle);
})();;
document.querySelectorAll('nav li.nav__item a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelector(`nav li.nav__item a[href="${this.getAttribute('href')}"]`).classList.add('nav__link--active');

        if (document.getElementsByClassName(`nav__link--active`)[0]) {
            document.getElementsByClassName(`nav__link--active`)[0].classList.remove('nav__link--active');
        }
    });
});

let scrollPos = window.scrollY;
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;

    if (scrollPos >= headerHeight) {
        document.querySelector(`.header__top`).classList.add('header__top--fixed');
        document.querySelector(`nav li.nav__item--first a`).classList.remove('nav__link--active');
    } else {
        document.querySelector(`.header__top`).classList.remove('header__top--fixed');
        document.querySelector(`nav li.nav__item--first a`).classList.add('nav__link--active');
    }

});