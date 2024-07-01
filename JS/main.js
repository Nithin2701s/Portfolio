/* ====================== toggle icon navbar ==================== */  

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark")
    navbar.classList.toggle('active')
}

/* ====================== scroll section active link ==================== */  

let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll =  () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    /* ========================== sticky navbar ======================= */  
    
    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100);
    
    /* ======================== toggle icon and navbar ======================= */  
    
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')
} 

/* ======================== scroll reveal ======================= */  

ScrollReveal({
    distance : "80px" ,
    duration : 2000,
    delay : 200,
});

ScrollReveal().reveal('.home-content, heading', { origin : 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin : 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin : 'left'});
ScrollReveal().reveal('.home-contact p, .about-content, .contact', { origin : 'right'});

/* ======================== typed js ======================= */  

const typed = new Typed('.multiple-text',
    {
        strings : ['Frontend Developer', 'Web Developer', 'UI/UX Designer'],
        typeSpeed : 70,
        backSpeed : 70,
        backDelay : 1000,
        loop : true,
        showCursor : false
    }
)

 
var swiper = new Swiper(".portfolio-container", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });