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
        $('.pagination-area').on('click', '.load-more', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('.pagination-area .load-more-wrapper').append('<a class="button" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });



    /*------------------------------------------------
     Magnificpopup for video gallery section
    -------------------------------------------------- */
    $('.vendorx-gallery-single-image').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });

    /*------------------------------------------------
     Magnificpopup for video gallery section
    -------------------------------------------------- */
    $('.vendorx-gallery').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });

    /*------------------------------------------------
     Magnificpopup for video gallery section
    -------------------------------------------------- */
    $('.portfolio-video-icon, .video-play-icon').magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });




})(jQuery)
