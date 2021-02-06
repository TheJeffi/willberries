const swiper = new Swiper('.swiper-container', {
   loop: true,
   // Стрелки навигации
   navigation: {
     nextEl: '.slider-button-next',
     prevEl: '.slider-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });