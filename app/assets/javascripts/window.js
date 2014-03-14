$(document).ready(function(){
  $('a[href *= #]').each(function scroll() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname &&
        this.hash.replace(/#/, '')) {
      var targetId = $(this.hash);
      var targetAnchor = $('[name=' + this.hash.slice(1) + ']');
      var target = false;

      if (targetId.length) {
        target = targetId;
      }
      else if (targetAnchor.length) {
        target = targetAnchor;
      }

      if (target) {
        var targetOffset = target.offset().top;

        $(this).click(function onClick() {
          // Deselect the old link and select the new one.
          $('header nav a.selected').removeClass('selected');
          $(this).addClass('selected');

          $('html, body').animate({scrollTop: targetOffset}, 1000);
          return false;
        });
      }
    }
  });
});
