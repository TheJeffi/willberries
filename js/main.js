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
   autoplay: {
    delay: 5000,
  },
 });

 $( ".more" ).click(function() {
  $( "#new-goods" ).slideToggle(0);
})
$( ".more" ).click(function() {
  $( "#new-goods" ).toggleClass("d-none").addClass("d-flex");
});
$( ".more" ).click(function() {
  $( "#new-goods" ).slideToggle(0);
})
$( ".more" ).click(function() {
  $( "#new-2-goods" ).toggleClass("d-none").addClass("d-flex");
});