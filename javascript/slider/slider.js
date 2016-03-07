$(document).ready(function() {

	//$('.slider').each(function () {
	//	var obj = $(this);
	//});
	window.onload = function start() {
	    slide();
	}
	

	var moving = {'margin-left':'-700px'}

	var totalSliderWidth = $('#slide-container').css('width');
	console.log(totalSliderWidth);

	var sliderEleentWidth = $('#slide-container').find('>li').css('width');
	console.log(sliderEleentWidth);
	//var offset = 700;

	//var counter_margin = element.margin;
	var offsetMargin = {'margin-left':'-700px'}

	function slide() {
		var num = 0, style = document.getElementById('slide-container').style;
		window.setInterval(function () {
			num = (num + 1) % 7;
			style.marginLeft = (-700 * num) + 'px';
		},4000);
	}


	$(function (){
		var interval = setInterval(slide, 4000);

		$('#slide-container').mouseenter (function(){
			(this).stop();
			}) .mouseleave (function(){
			interval = setInterval(slide, 4000);
		})
	});
	

	// $('#slider').find('> ul').animate({'margin-left':'-700px'}, 100)
	// 				.delay(2000)
	// 				.animate({'margin-left':'-1400px'}, 100)
	// 				.delay(2000)
	// 				.animate({'margin-left':'-2100px'}, 100)
	// 				.delay(2000)
	// 				.animate({'margin-left':'-2800px'}, 100)
	// 				.delay(2000)
	// 				.animate({'margin-left':'-3500px'}, 100)
	// 				.delay(2000)
	// 				.animate({'margin-left':'-4200px'}, 100)
	// 				.delay(2000)

	// function slide() {
 //    var num = 0, style = document.getElementById('container').style;
 //    window.setInterval(function () {
 //        // increase by num 1, reset to 0 at 4
 //        num = (num + 1) % 4;

 //        // -600 * 1 = -600, -600 * 2 = -1200, etc 
 //        style.marginLeft = (-600 * num) + "px"; 
 //    }, 3000); // repeat forever, polling every 3 seconds
// }





});