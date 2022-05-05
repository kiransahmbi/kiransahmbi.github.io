$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      var $navtext = $(".navbar a");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navtext.toggleClass('scrolled-text', $(this).scrollTop() > $nav.height());
    });
  });