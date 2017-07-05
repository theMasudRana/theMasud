(function($) {
    'use strict';

    $('#menu-trigger-id').on('click', function(e) {
        var $this = $(this);
        $this.toggleClass('active');
        e.preventDefault();
    });
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();



    // Portfolio section 
    $('.portfolio-section').imagesLoaded(function() {
        // Portfolio activation
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        });

        // Portfolio filtering activation
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // filter menu class addition  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        /*--------------------------------------------------
        LOAD MORE BUTTON FOR PORTFOLIO
        ---------------------------------------------------*/
        $('.pagination-area').on('click', '.lode-more', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('.pagination-area .load-more').append('<a class="button" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });








})(jQuery)
