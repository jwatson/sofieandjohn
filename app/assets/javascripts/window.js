$(document).ready(function() {

  var map = L.mapbox.map('map', 'jwatson.i4bh1ae1').setView([42.35872, -71.16568], 15);
  L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-71.16568, 42.35872],
    },
    properties: {
      title: 'Harry Parker Boathouse',
      description: '20 Nonantum Rd. Brighton, MA',
      'marker-size': 'large',
      'marker-color': '#77c'
    }
  }).addTo(map);

  // Smooth scroll to the anchor target in the nav bar.
  $('header nav a[href *= #]').each(function scroll() {
      var targetAnchor = $('[name=' + this.hash.slice(1) + ']');
      var targetId = $(this.hash);

      if (targetId.length) {
        var targetOffset = targetId.offset().top;

        $(this).click(function onClick(event) {
          // Deselect the old link and select the new one.
          $('header nav a.selected').removeClass('selected');
          $(this).addClass('selected');

          $('html, body').animate({scrollTop: targetOffset}, 1000);
          return false;
        });
      }
  });

});
