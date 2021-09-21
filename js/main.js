

 var x = 1;
 var plus = function(op) {
 var elem = document.getElementById("demo");
 if(op == "+") {
   x++;
 } else {
   x--;
 }
 elem.innerHTML = x;
};

$(function(){

    $('.banner__inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-next slick-btn slick__btn-left"><img src="images/next__btn.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-prev slick-btn slick__btn-right"><img src="images/prev__btn.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 740,
            settings: {
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 550,
            settings: {
              arrows: false,
              dots: false
            }
          }
        ]  
      });

      
    $(".star-reiting").rateYo({
      rating: 5,
      ratedFill: '#005052',
      normalFill: '#EAE8E0',
      starWidth: "16px",
      readOnly: true
    });
    $(".star-reviews-feackbeck").rateYo({
      rating: 0.5,
      ratedFill: '#005052',
      normalFill: '#EAE8E0',
      starWidth: "30px",
    });

    $(".star-blog").rateYo({
      rating: 3,
      ratedFill: '#005052',
      normalFill: '#fff',
      starWidth: "30px"
    });

    $(".star-reiting-reviews").rateYo({
      rating: 4,
      ratedFill: '#FBD87F',
      normalFill: '#EAE8E0',
      starWidth: "16px",
      readOnly: true
    });
  

    $('.product__item-favorite').on('click', function(){
      $(this).toggleClass('product__item-favorite--active');
    });

      $('.slider__inner').slick({ 
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        speed: 300,
        prevArrow:'<button type="button" class="slick-next slick-btn slick__btn-left"><img src="images/next__btn.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-prev slick-btn slick__btn-right"><img src="images/prev__btn.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          }
        ]  
      });

      $('.account-tab__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow:'<button type="button" class="slick-next slick-btn slick__btn-left"><img src="images/next__btn.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-prev slick-btn slick__btn-right"><img src="images/prev__btn.svg" alt=""></button>'  
      });

      $('.review__inner').slick({ 
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        prevArrow:'<button type="button" class="slick-next slick-btn slick__btn-left"><img src="images/next__btn.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-prev slick-btn slick__btn-right"><img src="images/prev__btn.svg" alt=""></button>',  
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]  
      });

  
        $('.catalog__menu-btn').on('click', function(){
          $(this).toggleClass('catalog__menu-btn--active');
        });

      $(".js-range-slider").ionRangeSlider({
        from: 20
      });

    $('.page-btn').on('click', function(){
      $('.page-btn').removeClass('page-btn--active');
      $(this).toggleClass('page-btn--active');
    });

    $('.delivery').on('click', function(){
      $('.delivery').removeClass('delivery--active');
      $(this).toggleClass('delivery--active');
    });



    $('.produckt-page__box-title').on('click', function(){
      $(this).toggleClass('produckt-page__box-title--active');
      $(this).next().slideToggle('200');
    });

    $('.filter-styler').styler();

      $('.menu__blog-link').on('click', function(e){

        e.preventDefaulk532t();
        $('.blog__tab-link').removeClass('blog__tab-link--active');
        $('.blog__item-tabs').removeClass('blog__item-tabs--active');

        $(this).addClass('blog__tab-link--active');

      });

      $('.tab').on('click', function(event) {
          var id = $(this).attr('data-id');
          $('.container__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
           return false;
     });
     $('.tab').on('click', function(){
        $('.tab').removeClass('on-tab');
       $(this).toggleClass('on-tab');
     });




    $('.catalog__tab').on('click', function(e){
        e.preventDefault();
        $('.catalog__tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

      });







      $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
      });
      $('.header__btn-menu').on('click', function(){
        $('.user').toggleClass('active');
      });

});