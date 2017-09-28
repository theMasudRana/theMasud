(function($) {
    'use strict';

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

    // Counetrup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
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

    /*------------------------------------------------
     Magnificpopup for about section
    -------------------------------------------------- */
    $('.about-icon').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });

    // Slider
    var mainSlider = $('.slider-navigation');
    mainSlider.slick({
        dots: true,
        arrows: false,
        autoPlay: true,
        speed: 500,
        autoPlaySpeed: 3000,
        infinite: true,
        fade: true,
        easing: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Testimonial slider
    var testimonialCarousel = $('.testimonial-wrapper');
    testimonialCarousel.slick({
        autoplay: false,
        dots: false,
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: true,
    });

    // Single Portfolio slider
    var singlePortfolioSlider = $('.portfolio-wrapper');
    singlePortfolioSlider.slick({
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: true,
        responsive: [{
            breakpoint: 767,
            settings: { dots: false }
        }]
    });

    // Single Blog Post slider
    var singlePostSlider = $('.blog-post-wrapper');
    singlePostSlider.slick({
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: true,
        responsive: [{
            breakpoint: 767,
            settings: { dots: false }
        }]
    });

    // Brand logo slider
    var brandLogoSlider = $('.brand-logo-slider');
    brandLogoSlider.slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        infinite: true,
        speed: 300,
        adaptiveHeight: false,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 4 } },
            { breakpoint: 767, settings: { slidesToShow: 3 } },
            { breakpoint: 481, settings: { slidesToShow: 2 } },
            { breakpoint: 321, settings: { slidesToShow: 2 } },
        ]
    });

    // Paralax activation
    $.stellar({
        responsive: true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalScrolling: false,
        horizontalOffset: 0,
        verticalOffset: 0
    });

    //Scroll to bottom
    $(".scroll-btn").on('click', function() {
        $('html,body').animate({
                scrollTop: ($("#about").offset().top - 58)
            }, 1000, 'easeInOutExpo');
    });


    /* ---------------------------------------------
     Header sticky style.
    --------------------------------------------- */
    $(window).on('scroll', function() {
        if ($('.navbar').offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
    });
    /*-------------------------------------------
     Menu show hide 
    ---------------------------------------------*/
    $('.menu-toggle-btn, .close-btn').on('click', function() {
        $('.menu-section').toggleClass('show-win');
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.menu-section').on('click', function() {
        $('.menu-button').fadeToggle(300);
        $('.button a').toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });
    /*-----------------------------------------------------------
       jQuery for page scrolling
    -------------------------------------------------------------*/
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 58)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $("a.page-scroll").on('click', function() {
        $('.menu-section').removeClass('show-win');
        $('.menu-toggle-btn').removeClass('is-active');
    });

    /* -------------------------------------------------------
        Menu active class changer
    ----------------------------------------------------------*/
    $('.main-menu ul li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------------------------------
      SCROLL TO TOP BUTTON
    ---------------------------------------------*/
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="fa fa-angle-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1250);
        });
    };


})(jQuery)