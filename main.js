    /*=============== SHOW MENU ===============*/

    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if(navToggle){
      navToggle.addEventListener('click', () =>{
          navMenu.classList.add('show-menu')
      })
    }

    if(navClose){
      navClose.addEventListener('click', () =>{
          navMenu.classList.add('show-menu')
      })
    }


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
      header.classList.add('shadow-header');
  } else {
      header.classList.remove('shadow-header');
  }
};

// Call the function when the page loads or as needed
shadowHeader();
window.addEventListener('scroll', shadowHeader);

/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavorites = new Swiper('.favorites_swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
});

const activeIndex = swiper.activeIndex;

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp  = () =>{
  const scrollup = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY
   
  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
           sectionsClass.classList.add('active-link')
      }else{
          sectionsClass.classList.remove('active-link')
      }      
  })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
})

sr.reveal(`.home_data, .favorites_container, .footer_container`)
sr.reveal(`.home_circle, .home_img`, {delay: 600, scale: .5})
sr.reveal(`.home_chips-1, .home_chips-2, .home_chips-3`, {delay: 1000, interval: 100})
sr.reveal(`.home_leaf`, {delay: 1200})
sr.reveal(`.home_tomato-1, .home_tomato-2`,{delay: 1400, interval: 100} )
sr.reveal(`.care_img, .contact_img`,{origin: 'left'})
sr.reveal(`.care_list, .contact_data`, {origin: 'right'})
sr.reveal(`.banner_item, .products_card`, {interval: 100})
