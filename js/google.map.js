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
        styles:[{"stylers":[{"saturation":-100}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#0099dd"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#aadd55"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('bolt-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

  var contentString = '<div id="map-content">' +
      '<div id="bodyContent">' +
      '<p> <span class="map-info-icon"><i class="fa fa-map-o"></i></span> <span class="map-info-content">1 Hacker Way, Menlo park ' +
      ' New York City, USA </span></p> ' +
      '<p> <span class="map-info-icon"><i class="fa fa-phone"></i></span> <span> +880044 545 989 626</span> </p> ' +
      '</div>' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });    

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        icon: 'img/icons/2.png',
        map: map,
        title: '1 Hacker Way, Menlo park, New York City, USA'
    });
    infowindow.open(map, marker);
}