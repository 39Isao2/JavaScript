$(function(){



// swiper
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
    observer: true,
    observeParents: true,
});



// アコーディオン
$('#accordion dt').on('click',function(){
    $(this).next('dd').slideToggle();
});


// タブ切り替え
$('.tab').on('click', function(){
    // is-activeクラスがついてるのを全部外す
    $('.is-active').removeClass('is-active');

    // クリックしたタブにis-activeクラスを付与
    $(this).addClass('is-active');

    // クリックしたタブからインデックス番号(何番目か)を取得
    let index = $(this).index();

    // クリックしたタブと同じインデックス番号をもつコンテンツを表示
    $('.tab-content').eq(index).addClass('is-active');
});


// scroll-fadeアニメ
$(window).on('scroll', function (){

    /* scroll-effectクラス全ての要素を見にいく */
    $('.scroll-effect').each(function(){

        // 要素の高さを取得
        let targetPos = $(this).offset().top;

        // スクロールの値を取得
        let scroll = $(window).scrollTop();

        // ウインドウの高さを取得
        let windowHeight = $(window).height();

        if (scroll > targetPos - windowHeight){
            $(this).addClass('scroll-in');
        }

    });
    
});


// ローディングアニメ
setTimeout(function(){
    $('.loader-wrap').fadeOut();
    $('#container').fadeIn(1500);
},4000);


// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
    header: '#global-nav'
});


/* ローディングアニメ*/

let lodingAnime = () =>  {

    // display blockに
    $('#loading-anime').show();

    // アニメーションをつける
    $('#loading-anime').addClass('animate__bounceInDown');


    // 2秒後に発火
    setTimeout(() =>{
        $('.loader-wrap').fadeOut();
        $('#container').fadeIn();
    },2000);

}

lodingAnime();


/* sessionStorageで初回アクセス判定 */
// if(sessionStorage.getItem('access')){
//     console.log('2回目以降のアクセスです');
//   } else {
//     lodingAnime();
//     console.log('初回アクセスです');
//     sessionStorage.setItem('access', 1);
// }



});