$(function(){
      //   swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        // 循环播放
        loop: true,
        loopFillGroupWithBlank: true,
        // 自动播放
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        // 分页器
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        // 左右箭头
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 响应式
        breakpoints: {
            1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            767: {
            slidesPerView: 1,
            spaceBetween: 30,
            },
    
        }
    });

})