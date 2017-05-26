(function($) {
	'use strict';

	$('#menu-trigger-id').on('click', function(e) {
		var $this = $(this);
		$this.toggleClass('active');
		e.preventDefault();
	});

})(jQuery)