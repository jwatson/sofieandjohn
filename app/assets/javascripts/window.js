$(document).ready(function() {

  L.mapbox.map('map', 'jwatson.i4bh1ae1');

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
