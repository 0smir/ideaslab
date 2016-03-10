$(document).ready(function(){
	console.log( "ready!" );


	$('#slider').each(function(){
		var obj = $(this);
		$(obj).append("<div class='controls'></div>");
		$(obj).find('li').each(function(){
			$(obj).find('.controls').append("<span class='"+$(this).index()+"'></span>");
			$(this).addClass('slide'+$(this).index());
		});
		$(obj).find("span").first().addClass("active");
	});



	function sliding(obj, sl){
		var ul = $(sl).find("ul");
		var block = $(sl).find("li.slide"+obj);
		var step = $(block).width();
		$("ul").animate({marginleft: "-" + step * obj}, 100);
	}
	$("button").on("click", ".slider .controls span", function(){

	});

});	

