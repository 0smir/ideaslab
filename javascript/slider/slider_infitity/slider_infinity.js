$(document).ready(function() {

	window.onload = function start() {
		window.roll = true;

	    slide();
	}
	

	var moving = {'margin-left':'-700px'}

	var totalSliderWidth = $('#slide-container').css('width');
	console.log(totalSliderWidth);

	var sliderEleentWidth = $('#slide-container').find('>li').css('width');
	console.log(sliderEleentWidth);
	


	function slide() {
		var num = 0, style = document.getElementById('slide-container').style;
		window.setInterval(function () {
			console.log(window.roll);
			if (window.roll === true){

				num = (num + 1) % 7;
				style.marginLeft = (-700 * num) + 'px';
			};

		},4000);
	}


	$('#slide-container').hover(function() {
  		window.roll = false;
  		console.log(roll);

  	}, function(){
  		window.roll = true;
  		console.log(roll);
  	});







});