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
	

	//случайный слайд 
	function slide() {
		style = document.getElementById('slide-container').style;
		window.setInterval(function () {
			console.log(window.roll);
			if (window.roll === true){
				
				function randnumb(min, max){
					var rand = min + Math.random() * (max - min)
					rand = Math.floor(rand);
					return rand;
				}
				console.log(randnumb (1, 7));

				style.marginLeft = (-700 * randnumb(1, 7)) + 'px';
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