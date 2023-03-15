/*************************************** SMUSH API from GREENSOCKS ***************************************/
var controller = new ScrollMagic.Controller();

/* Définit l'animation de la citation */
$(document).ready(function () {
  var smushTween = new TimelineMax()
    .from('.smush-text', 1, {
      fontSize: '1vw',
      opacity: 0,
      lineHeight: '4vh',
      ease: Power2.easeOut
    });

  var smushScene = new ScrollMagic.Scene({
    triggerElement: '.smush-text',
    triggerHook: 'onEnter',
    duration: '100%'
  })
    .setTween(smushTween)
    .addTo(controller);
});
/*************************************** BUTTON TO TOP ***************************************/
/* Gère un bouton qui scroll up jusqu'en haut du body */
$(document).ready(function () {
  // Show/hide the button based on scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.btn-top').fadeIn();
      $('.btn-top').css({
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
      });
    } else {
      $('.btn-top').fadeOut();
    }
  });

  // Scroll to top when button is clicked
  $('.btn-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});