

$(function(){

    $('.tab').on('click', function(){

        // is-activeクラスがついてるのを全部外す
        $('.is-active').removeClass('is-active');

        // クリックしたタブにis-activeクラスを付与
        $(this).addClass('is-active');

        // クリックしたタブからインデックス番号を取得
        let index = $(this).index();

        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.tab-content').eq(index).addClass('is-active');
    });
    
});
 