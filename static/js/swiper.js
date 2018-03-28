$(function(){
      //   swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        breakpoints: {
            1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
            767: {
            slidesPerView: 1,
            spaceBetween: 30,
            },
    
        }
    });

})