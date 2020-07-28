
// ウインドウを読み込んだ時とロードした時
$(window).on('scroll load', function (){

    /* scroll-effectクラス全ての要素を見にいく */
    $('.scroll-effect').each(function(){

        // 要素の高さを取得
        let targetPos = $(this).offset().top;

        // スクロールの値を取得
        let scroll = $(window).scrollTop();

        // ウインドウの高さを取得
        let windowHeight = $(window).height();

        // 可視範囲に入ったら
        if (scroll > targetPos - windowHeight){
            $(this).addClass('scroll-in');
        }

    });

});
