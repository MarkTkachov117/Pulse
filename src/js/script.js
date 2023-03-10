$(document).ready(function(){
    $('.carusel__inner').slick(
        {
            speed: 1300,
            // adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_arrow.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.png"></button>',
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                }


              }
            ]
          }
    );

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

   
    function toggleSlide (item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
      })
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');



    //Modal!!!!
    
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thansk').fadeOut('slow');
    });
    $('.overlay__inner').on('click', function(){
      $('.overlay, #consultation, #order, #thansk').fadeOut('slow');
    });
   
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });
    
    //close if esc key is pressed
    $('body').keyup(function(e){
      if (e.keyCode == 27) { 
          $('.overlay, #consultation, #order, #thanks').fadeOut();
      }
    });


    //#########VALIDATION##########

    

    function valideForm (form) {
      $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true,
            }
        },
        messages: {
          name: "????????????????????, ?????????????? ???????? ??????",
          phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
          email: {
            required: "????????????????????, ?????????????? ???????? e-mail",
            email: "?????????????????????? ???????????? e-mail ??????????"
          }
        }
    });
    };

    valideForm('#order form');
    valideForm('#consultation form');
    valideForm('#consultation-form');


    //Scroll & padeUP
    $(window).scroll(function () {
          if ($(this).scrollTop() > 1600) {
              $('.pageup').fadeIn('slow');
          } else {
            $('.pageup').fadeOut('slow')
          }
    });
    
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });


    new WOW().init();

});
  
  

