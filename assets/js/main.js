// MOBILE MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Open menu
navToggle.addEventListener('click',() => {
    navMenu.classList.add('nav__menu--show');
})

// Close menu 
const closeMenu = () => {
    navMenu.classList.remove('nav__menu--show');
}
navClose.addEventListener('click', closeMenu);
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
})

// ACTIVE HEADER
const header = document.getElementById('header');
function showHeader() {
    this.scrollY > 200 ? header.classList.add('header--active') : header.classList.remove('header--active');
}
window.addEventListener('scroll', showHeader);

// SCROLL UP


// SCROLL SECTIONS
const sections = document.querySelectorAll('section[id]');
function changeActiveMenuItem() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 140;
        const menuLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
        (sectionTop < scrollY && scrollY <=sectionTop + sectionHeight) 
            ? menuLink.classList.add('nav__link--active')
            : menuLink.classList.remove('nav__link--active');
    })
};
window.addEventListener('scroll',changeActiveMenuItem);

// SWIPER 
const homeSwiper = new Swiper(".home-swiper", {
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true
    }
})

const reviewSwiper = new Swiper(".review-swiper", {
    spaceBetween: 20,
    loop: 'true',
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4
        }
    }
});