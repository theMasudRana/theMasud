(function($) {
	'use strict';

	$('#menu-trigger-id').on('click', function(e) {
		$(this).toggleClass('active');
		e.preventDefault();
	});

})(jQuery)