$(document).ready(function(){
	console.log( "ready!" );


	// (function(){
	// 	window.onload = function start() {
	// 	window.roll = true;

	//     slide();
	// 	}



	// 	function slide() {
	// 	var num = 0, style = document.getElementById('slide-container').style;
	// 	window.setInterval(function () {
	// 		console.log(window.roll);
	// 		if (window.roll === true){

	// 			num = (num + 1) % 7;
	// 			style.marginLeft = (-700 * num) + 'px';
	// 		};

	// 	},4000);
	// }


	// $('#slide-container').hover(function() {
 //  		window.roll = false;
 //  		console.log(roll);

 //  	}, function(){
 //  		window.roll = true;
 //  		console.log(roll);
 //  	});




	// })();


	$('#slider').each(function(){
		var obj = $(this);
		$(obj).append("<div class='controls'></div>");// вслайдер добавляем навигацию
		$(obj).find('li').each(function(){// для каждого элемента
			$(obj).find('.controls').append("<span rel='"+$(this).index()+"'></span>");
			$(this).addClass('slide'+$(this).index());
		});
		$(obj).find("span").first().addClass("active");
	});
	

});	

	function sliding(obj, sl){
			var ul = $(sl).find("ul");
			var block = $(sl).find("li.slide"+obj);
			var step = $(block).width();
			var marginLeftValue = "-"+step*obj+"px"
			$(ul).animate({marginLeft: marginLeftValue}, 100);
		}
		$(document).on("click", "#slider .controls span", function(){
			var sl = $(this).closest("#slider");
			$(sl).find("span").removeClass("active");
			var obj = $(this).attr("rel");
			$(this).addClass("active");
			sliding(obj, sl);
			return false;
	});



	(function(){
		// var prev = $('#prev'),             
		// var next = $('#next'),
	})()
	
