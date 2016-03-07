$( document ).ready(function() {

   var option = {height:'400px', opacity: 0.3}
   $('.blue').animate( option, 2000);


   $('.blue').css( option);


	var height = $('.blue').css('height');
   	console.log(height);



   	$('ul').animate({width:'100%'}, 4000);


   	$('li').animate({width:'99%'}, 7000, function(){
   		$(this).css({'align-self':'flex-end'})
   	.animate({ width:'50%'}, 4000);
   	});

   		
   	$('blue').animate({opacity: 0.5}, 2000)

   	$('.button').on('click', function(){
   		$(this).css({'background-color':'white'});
   	

   	var self = this;
   	setTimeout(function(){
   		$(self).removeAttr('style');
   	}, 2000);
   	});	


   	$('a').on('click', function(){
   		return false;
   	});

});