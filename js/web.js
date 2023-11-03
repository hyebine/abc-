$(document).ready(function () { /*실전에선 안쓰임 시험때문에 만듦 */
    setInterval(function () {
        $(".swiper-wrapper").animate({ "marginLeft": -1200 }, 400, function () {
            //왼쪽으로 1200만큼 가라 400이 디폴트값
            $("div:first-child", this).appendTo($(this))
            //this안에 div 첫째가 막내가 됨
            $(this).css("marginLeft", 0)
        })
    }, 3000) //3초마다 실행

})