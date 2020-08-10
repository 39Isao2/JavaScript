$(function() {
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#global-nav').toggleClass('active');
    //$(this).next().toggleClass('active');
  });
});