$(function () {

  let count = 0; // 한번만 선언

  setInterval(fadefun, 3000)

  // function anifun(){
  //       $(".swiper-wapper").animate({
  //         "marginTop" : -$(".swiper").height() 
  //       }, 400, function(){
  //         $(".swiper-wapper .swiper-slide").eq(0).appendTo($(".swiper-wapper"))
  //         $(".swiper-wapper").css({"marginTop" : 0})

  //       })
  //   }

  function fadefun() {

    count++;
    count %= $(".swiper-slide").length;

    $(".swiper-slide").eq(count).addClass("active").sliblings().removeClass("active");
  }

})
