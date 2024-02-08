$(function(){

  setInterval(anifun, 3000)

  function anifun(){
        $(".swiper-wapper").animate({
          "marginLeft" : -$(".swiper-slide").width() 
        }, 400, function(){
          $(".swiper-wapper .swiper-slide").eq(0).appendTo($(".swiper-wapper"))
          $(".swiper-wapper").css("margin-left" , 0)

        })
    }
})
