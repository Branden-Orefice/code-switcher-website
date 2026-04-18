const mobileNav = () => {
    const headerButton = document.querySelector('.header__mobile__icon');
    const mobileHam = document.querySelector('.header__mobile-button');
    const mobileLinks = document.querySelectorAll('.mobile__link');


    let isMobileNavOpen = false;

    headerButton.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileHam.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileHam.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(links => {
        links.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileHam.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
};

mobileNav()