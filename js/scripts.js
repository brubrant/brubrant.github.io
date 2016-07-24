(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		

		/*
		* Show Contact
		*/

		function showUnder () {

			$('.miolo-under').height($(window).height());
			$('.miolo-under').css('padding', '40px 0');
			$('html, body').animate({

				scrollTop : $('.miolo-under').offset().top

			}, 500);

			setTimeout(function() {
				$('.blink').delay( 20000 ).addClass('rotated');
				
			}, 2000);

			
		}
		$('.entrar-contato a').click(function(e) {
			
			e.preventDefault();
			showUnder();

		});


		/*
		* Show tahnks
		*/

		if(window.location.href.indexOf('obrigado') > 1) {
			$('.thanks').slideDown('400', function() {

				setTimeout(function() {
					$('.thanks').hide('400', function() {
						
					});

				}, 4000);
				
			});
		}



		
	});
	
})(jQuery, this);