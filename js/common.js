$(document).ready(function(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
        $(".header").addClass("active");
        $(".quick_menu").addClass("active");
      } else {
        $(".header").removeClass("active");
        $(".quick_menu").removeClass("active");
      }
    });

    $(".smenu").click(function(){
      $(".down-btn").toggleClass("active");
    });
    $(".smenu").click(function(){
      $(".smenu_wrap").toggleClass("active");
    });

});