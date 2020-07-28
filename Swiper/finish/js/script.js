
var swiper = new Swiper('.swiper-container', {

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination',
    },
    autoplay: {
        delay: 500, // 次スライドまでの待機時間
    },
    speed: 1000, // スライドするスピード
    loop:true,

});
