$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  nav: true,
  dots: false,
  margin: false,
  navText: [
    "<img src='public/images/icons/Left-button.png' width='32px' height='32px'>",
    "<img src='public/images/icons/Right-button.png' width='32px' height='32px'>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
