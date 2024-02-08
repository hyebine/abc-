$(function(){

  setInterval(anifun, 3000)

  function anifun(){
        $(".swiper-wapper").animate({
          "marginTop" : -$(".swiper").height() 
        }, 400, function(){
          $(".swiper-wapper .swiper-slide").eq(0).appendTo($(".swiper-wapper"))
          $(".swiper-wapper").css({"marginTop" : 0})

        })
    }
})
