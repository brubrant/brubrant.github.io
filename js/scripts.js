(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';


		function showAbove () {

			$('.about-me').css('max-height', 2500);
			// $('.about-me').css('min-height', $(window).height());
			// $('.about-me').css('height', 'auto');
			$('.about-me').css('padding', '40px 0');
			$('html, body').delay('2s').animate({

				scrollTop : $('.about-me').offset().top

			}, 1000);
		}

		$('h1').click(function(event) {
			showAbove();
		});

		
		

		/*
		* Show Contact
		*/

		function showUnder () {

			$('.miolo-under').css('min-height', $(window).height());
			$('.miolo-under').css('height', 'auto');
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