var header = document.getElementsByClassName('header')[0];

var parallax = function () {
  var scroll = window.scrollY;
  var offset = scroll * 0.25;
  header.style.backgroundPositionY =  offset + 'px';
  window.requestAnimationFrame(parallax);
}

parallax();
