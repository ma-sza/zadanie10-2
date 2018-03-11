$(function() {
  var carouselList = $("#carousel ul");
  var prev = $("#prev");
  var next = $("#next");

  function changeSlide() {
    carouselList.animate({
      'marginLeft': -800
    }, 500, moveFirstSlide);
  }

  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");

    lastItem.after(firstItem);
    carouselList.css({
      marginLeft: 0
    });
  }

  function moveLastSlide() {

    carouselList.css({
      marginLeft: 0
    });
  }

  setInterval(changeSlide, 3000);


  function nextSlide() {
    carouselList.animate({
      'marginLeft': -800
    }, 500, moveFirstSlide);
  }

  function prevSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");

    firstItem.before(lastItem);
    carouselList.css("margin-left", -800);
    carouselList.animate({
      'marginLeft': 0
    }, 500);
  }

  prev.on("click", prevSlide);
  next.on("click", nextSlide);
});
