$(function () {

  // setInterval(
  //   function () {
  //     $('.swiper-wrapper').animate({ "marginLeft": -1200 }, 400, function () {
  //       $('.swiper-wrapper > div').eq(0).appendTo($('.swiper-wrapper'))
  //       $('.swiper-wrapper').css({ "marginLeft": 0 })
  //     })
  //   }, 3000)



  /* setInterval(
     function () {
       $('.swiper-wrapper').animate({ "marginTop": -300 }, 400, function () {
         $('.swiper-wrapper > div').eq(0).appendTo($('.swiper-wrapper'))
         $('.swiper-wrapper').css({ "marginTop": 0 })
       })
     }, 3000)

   // d-flex 지우기

   */


  // 페이드


  let count = 0;
  setInterval(function () {
    count = (count + 1) % 3;
    $(".swiper-slide").eq(count).addClass("act").siblings().removeClass("act")
  }, 3000)


  // tab

  $('.tabwrap h2').click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    // 갤러리 바디 ,공지 바디
    $(".tabwrap>div>div>div").eq($(this).index()).addClass("on").siblings().removeClass("on")
  })


  // 공지사항 첫번째 클릭 팝업

  $('.notice li:first-child a').click(function () {
    $("#pop").show()
  })

  $("#pop button").click(function () {
    $("#pop").hide()
  })

})