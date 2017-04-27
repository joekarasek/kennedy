(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.stopVideoModal('#videoModal', '#video-one');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '42.6056908,-87.8442339', '42.6056908,-87.8442339');

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
      '<img src="assets/arrow_left.png" alt="left navigation arrow">',
      '<img src="assets/arrow_right.png" alt="right navigation arrow">'
    ]
  });

}(jQuery, HelloWorldDevsTysonSteele));

