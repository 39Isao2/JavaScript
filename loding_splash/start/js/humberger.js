//全体の囲みは即時関数です、決り文句としてこの枠内に記述を書くと他のjsの影響などを受けなくなります。
(()=>{
  'use strict';

$(function() {
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#global-nav').toggleClass('active');
    //$(this).next().toggleClass('active');
  });
});

})();// END
