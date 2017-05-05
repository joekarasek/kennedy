(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.stopVideoModal('#videoModal', '#video-one');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '45.5769959,-122.7030303', '45.5769959,-122.7030303');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    navText: [
      '<img src="assets/arrow_left.png" alt="left navigation arrow">',
      '<img src="assets/arrow_right.png" alt="right navigation arrow">'
    ]
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    items: 1,
    navText: [
      '<i class="icon-chevron-left"></i>',
      '<i class="icon-chevron-right"></i>'
    ]
  });
  // HelloWorldDevsTysonSteele.pyramidCarousel('.js-associations-carousel', {
  //   nav: false,
  //   // autoWidth: true,
  //   slideBy: 1,
  // });
  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    nav: false,
    autoWidth: false,
    slideBy: 1,
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-gallery-carousel', {
    items: 1,
    navText: [
      '<img src="assets/arrow_left.png" alt="left navigation arrow">',
      '<img src="assets/arrow_right.png" alt="right navigation arrow">'
    ]
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

}(jQuery, HelloWorldDevsTysonSteele));

