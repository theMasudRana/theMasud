(function($) {
    'use strict';

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
    });
    wow.init();

    /*--------------------------------------------------
    PORTFOLIO ACTIVATION.
    ---------------------------------------------------*/
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

    /*--------------------------------------------------
    Countdown Activation
    ---------------------------------------------------*/
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
     Magnification for about section
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
    var singlePortfolioSlider = $('.single-project-slider');
    singlePortfolioSlider.slick({
        autoplay: true,
        dots: false,
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
        dots: false,
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
    if ($('.navbar-fixed-top').length !== 0) {
        $(window).on('scroll', function() {
            if ($('.navbar').offset().top > 50) {
                $('.navbar-fixed-top').addClass('top-nav-collapse');
            } else {
                $('.navbar-fixed-top').removeClass('top-nav-collapse');
            }
        });
    }
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

    /* ---------------------------------------------
        Instagram Feed JS activation
    --------------------------------------------- */
    if ($('#instafeed').length !== 0) {
        var userFeed = new Instafeed({
            get: 'user',
            limit: '6',
            userId: '4713066548',
            accessToken: '4713066548.8d3ef49.6942ccf6893b404185d88e24f7d56229',
            template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'
        });
        userFeed.run();
    }

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

    /*-------------------------------------------
      Bolt Contact Map Activation
    ---------------------------------------------*/    
    if ($('#bolt-map').length !== 0) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,
                scrollwheel: false,
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York
                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "stylers": [{
                        "saturation": -100
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#0099dd"
                    }]
                }, {
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#aadd55"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('bolt-map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            var contentString = '<div id="map-content">' +
                '<div id="bodyContent">' +
                '<p class="text-center"> <span class="map-info-icon"><i class="fa fa-map-o"></i></span> <span class="map-info-content">10 Main Street, STD park ' +
                ' New York City, USA </span></p> ' +
                '<p class="text-center"><span class="map-info-icon"><i class="fa fa-phone"></i></span> <span> +8801 234 567 89</span> </p> ' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                map: map,
                title: '1 Hacker Way, Menlo park, New York City, USA'
            });
            infowindow.open(map, marker);
        }
    }

})(jQuery)