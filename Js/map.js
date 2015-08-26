
function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatLng = {lat: 43.6866070, lng: -79.7607210};
  var mapOptions = {
    center: myLatLng,
    scrollwheel: false,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
   var marker = new google.maps.Marker({
    position: myLatLng,
    map: mapCanvas,
    title: 'CB Squared Hair Studio'
  });
  var map = new google.maps.Map(mapCanvas, mapOptions);
  marker.setMap(map);
  map.set('styles', 
    [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},
    {"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},
    {"lightness":51},{"visibility":"simplified"}]},
    {"featureType":"road.highway","stylers":[{"saturation":-100},
    {"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},
    {"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},
    {"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},
    {"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
    {"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},
    {"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},
    {"lightness":-25},{"saturation":-97}]}]
    );
};
google.maps.event.addDomListener(window, 'load', initialize);
