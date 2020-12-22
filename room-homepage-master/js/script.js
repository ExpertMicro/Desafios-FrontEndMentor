$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  prevArrow: $("#arrow-prev"),
  nextArrow: $("#arrow-next")
});

$(document).ready(function(){
  let i = 0;
  for(i = 0; i < 3; i++) {
    if( i === 1) {
      $("#arrow-next").click(function(){
        $(".bg-card-01").css("background-image", "url(img/desktop-image-hero-2.jpg)");
      });
    }
    else if( i === 2) {
      $("#arrow-next").click(function(){
        $(".bg-card-01").css("background-image", "url(img/desktop-image-hero-2.jpg)");
      });
    }
    else if( i === 3) {
      $("#arrow-next").click(function(){
        $(".bg-card-01").css("background-image", "url(img/desktop-image-hero-3.jpg)");
      });
    }
  }
});