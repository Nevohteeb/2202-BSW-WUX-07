var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true
});

document.getElementById("slide1button").onclick = function () {
    swiper.slideNext();
}

document.getElementById("slide2prevbutton").onclick = function() {
    swiper.slidePrev();
  };

  document.getElementById("slide2nextbutton").onclick = function() {
    swiper.slideNext();
  };

  document.getElementById("slide3prevbutton").onclick = function() {
    swiper.slidePrev();
  };