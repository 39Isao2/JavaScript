


$(function(){

	// display blockに
	$('#loading-anime').show();

	// アニメーションをつける
	$('#loading-anime').addClass('animate__bounceInDown');


	// 3秒後に
	setTimeout(() =>{
	    $('.loader-wrap').fadeOut();
	    $('#container').fadeIn();
	},2000);

});