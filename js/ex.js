$(function () {

    let count = 0;

    setInterval(function(){
      count++;
      count %= $(".swiper-slide").length;
      $(".swiper-slide").eq(count).addClass("active").siblings().removeClass("active");
    }, 3000)


})
