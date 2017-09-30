(function($) {
    'use strict';

    /* ---------------------------------------------
     Instagram Feed JS activation
    --------------------------------------------- */
    var userFeed = new Instafeed({
        get: 'user',
        limit: '6',
        userId: '4713066548',
        accessToken: '4713066548.8d3ef49.6942ccf6893b404185d88e24f7d56229',
        template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();



})(jQuery)
