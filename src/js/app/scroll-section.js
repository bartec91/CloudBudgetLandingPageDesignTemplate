window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li.nav__item a[href="#${id}"]`).parentElement.classList.add('nav__link--active');
            } else {
                document.querySelector(`nav li.nav__item a[href="#${id}"]`).parentElement.classList.remove('nav__link--active');
            }
        });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});