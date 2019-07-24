var $ = require('jquery');
// 点击导航栏的a标签 让滚动条滚动到锚点的位置
$(".navigation a").click(function () {
    // animate方法 动画过渡  参数：目标点  动画过渡时间  过度方式(变化线性运动)  回调函数
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 20 + "px" }, 500);
    $(".navigation a").removeClass('ver');
    $(this).addClass('ver');
    return false;
});
