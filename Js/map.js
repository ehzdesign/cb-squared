
function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatLng = {lat: 43.6866070, lng: -79.7607210};
  var mapOptions = {
    center: myLatLng,
    scrollwheel: false,
    zoom: 60,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
   var marker = new google.maps.Marker({
    position: myLatLng,
    map: mapCanvas,
    title: 'CB Squared Hair Studio'
  });
  var map = new google.maps.Map(mapCanvas, mapOptions);
  marker.setMap(map);
  map.set('styles', [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
    { color: '#d4d4d4' },
    { weight: 1.6 }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
    { saturation: 100 },
    { invert_lightness: true }
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
    { hue: '#6b6d6e' },
    { gamma: 1.4 },
    { saturation: 2 },
    { lightness: 66 }
    ]
  }, {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
    { hue: '#d4d4d4' },
    { lightness: -15 },
    { saturation: 25 }
    ]
  }
  ]);
};
google.maps.event.addDomListener(window, 'load', initialize);
