$(document).ready(function(){
    $(".lo_slider").slick({
        dots: false,
        infinite: true,
        arrows: false,
        prevArrow: $('.v_prev'),
        nextArrow: $('.v_next'),
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 800,
        slidesToShow: 3, 
        slidesToScroll: 1,
        // fade: true,
    });

      // premium_slide01
    // let premiumSlide = $('.premium_slide');
    let sliderCounter = $('.pagingInfo');
    let currentSlideCount;
    let totalSlideCount;
    let calc;
  
    $('.pr_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: $('.premium_p'), //이전 화살표
        nextArrow: $('.premium_n'), //다음 화살표
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 800,
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수   
        fade: true,
    });
   
  
    function slickActive() {

        if ($('.p_item01').hasClass('slick-active')) {
          $('.desc.p_01').addClass('active');
        } else if ($('.p_item02').hasClass('slick-active')) {
          $('.desc.p_02').addClass('active');
        } else if ($('.p_item03').hasClass('slick-active')) {
          $('.desc.p_03').addClass('active');
        } else if ($('.p_item04').hasClass('slick-active')) {
          $('.desc.p_04').addClass('active');
        } else if ($('.p_item05').hasClass('slick-active')) {
          $('.desc.p_05').addClass('active');
        } else if ($('.p_item06').hasClass('slick-active')) {
          $('.desc.p_06').addClass('active');
        } 
    }
  
    $('.pr_slider').on({
        init: function (event, slick) {
  
        },
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $('.desc').removeClass('active');
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
            slickActive();
        }
    });

    let updateSliderCounter = function(slick, currentSlide) {
  
        // 현재 페이지 index +1 을 해준 이유는 1부터 시작되게 하게끔
        currentSlideCount = slick.slickCurrentSlide() + 1;
  
        // 전체 슬라이드 페이지 갯수
        totalSlideCount = slick.slideCount;
  
        // 현재 페이지 index / 전체 슬라이드 갯수 나누고 * 100을 해서 퍼센페이지화 시킴
        calc = (currentSlideCount / totalSlideCount) * 100;
  
        $('.pagingInfo').text("0" + currentSlideCount + '│' + 0 + totalSlideCount);
        // $('.progress').css('width', calc + '%');
    };
  
  
    $('.premium_slipr_sliderde').on('init', function(event, slick) {
        premiuSlide.append(sliderCounter);
        updateSliderCounter(slick);
    });
  
    $('.pr_slider').on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });    


        //    brand_slider
       $(".brand_slider").slick({
        dots: false,
        arrows: true,
        prevArrow: $(".brand_p"),
        nextArrow: $(".brand_n"),
        autoplay: true,
        autoplaySpeed: 2800,
        speed: 800,
        infinite: true,
        // centerMode: true, //센터모드
        // centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3,
        slidesToScroll: 1,
       });
});
