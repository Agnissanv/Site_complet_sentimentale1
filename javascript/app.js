const searchcontainer = document.querySelector('.search-container');
const btnsearch = document.querySelector('#search-icon');
const cartcontent = document.querySelector('.cart-container');
const cartbtn = document.querySelector('#cart-icon');
const userbtn = document.querySelector('#user-icon');
const usercontent = document.querySelector('.user-container');
const nav = document.querySelector('.navigations');
const menubtn = document.querySelector('#menu-icon');
const linknav = document.querySelectorAll('.navigations a');
const header = document.querySelector('nav');
const sections = document.querySelectorAll('section');



menubtn.addEventListener('click', () =>{
    nav.classList.toggle('active')
    menubtn.classList.toggle('bx-x')
    cartcontent.classList.remove('active')
    usercontent.classList.remove('active')
    searchcontainer.classList.remove('active') 
});



btnsearch.addEventListener('click', () =>{
    searchcontainer.classList.toggle('active')
    cartcontent.classList.remove('active')
    usercontent.classList.remove('active')
    nav.classList.remove('active')
    menubtn.classList.remove('bx-x')
});

cartbtn.addEventListener('click', () =>{
    cartcontent.classList.toggle('active')
    searchcontainer.classList.remove('active')
    usercontent.classList.remove('active')
    nav.classList.remove('active')
    menubtn.classList.remove('bx-x')
});

userbtn.addEventListener('click', () =>{
    usercontent.classList.toggle('active');
    searchcontainer.classList.remove('active');
    cartcontent.classList.remove('active')
    nav.classList.remove('active')
    menubtn.classList.remove('bx-x')
});

linknav.forEach(link=>{
    link.addEventListener('click',()=>{
         nav.classList.remove('active')
         menubtn.classList.remove('bx-x')
    })
});

window.addEventListener('scroll',()=>{
    header.classList.toggle('active', window.scrollY>0)
})

window.addEventListener('scroll',()=>{
    usercontent.classList.remove('active');
    searchcontainer.classList.remove('active');
    cartcontent.classList.remove('active')
    nav.classList.remove('active')
    menubtn.classList.remove('bx-x')
})

const scrollActive = ()=>{
    sections.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            linknav.forEach(links =>{
                links.classList.remove('active');
                document.querySelector(`.navigations a[href*=${id}]`).classList.add('active');
            })
        }
    })
}

window.addEventListener('scroll',scrollActive)

var swiper = new Swiper(".news-cont", {
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            568: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
            
           
        },
            
    });