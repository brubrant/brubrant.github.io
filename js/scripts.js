(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		
		function showUnder () {

			$('.miolo-under').height($(window).height());
			$('.miolo-under').css('padding', '40px 0');
			$('html, body').animate({

				scrollTop : $('.miolo-under').offset().top

			}, 500);
			
		}


		$('.entrar-contato a').click(function(e) {
			
			e.preventDefault();
			showUnder();

		});


		
	});
	
})(jQuery, this);