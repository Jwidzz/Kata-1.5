var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      767: {
        enabled:false,
      }
    },
    mousewheel: true,
    keyboard: true,
  });


let swiperSlide = document.querySelectorAll('.swiper-slide')

if (window.innerWidth > 767) {
  for(let i=8; i<swiperSlide.length; i++) {
    swiperSlide[i].classList.add('invisible')
  }
};

let btn = document.querySelector('.show-more-btn');
let text = btn.querySelector('.show-more-text');
let img = btn.querySelector('.show-more-img');

btn.addEventListener('click', function() {
   if(text.textContent === 'Показать все') {
    text.textContent = 'Скрыть'
    img.style.transform = 'rotate(180deg)'
    for(let i=8; i<swiperSlide.length; i++) {
      swiperSlide[i].classList.remove('invisible')
    }
   } else {
    text.textContent = 'Показать все'
    img.style.transform = 'rotate(0deg)'
    for(let i=8; i<swiperSlide.length; i++) {
      swiperSlide[i].classList.add('invisible')
    }
   }
});


