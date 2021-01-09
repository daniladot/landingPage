
let data = ['01', '02']


function sliderInit() {
  $('#slider__section_popular-categories').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.sliders').slick({
    slidesToShow: 3, //сколько слайдов показывать в карусели
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.section_what-people-say__slider').slick({
    slidesToShow: 3, //сколько слайдов показывать в карусели
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    asNavFor: '.section_what-people-say__slider_information',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.section_what-people-say__slider_information').slick({
    slidesToShow: 1, //сколько слайдов показывать в карусели
    slidesToScroll: 1,
    speed: 700,
    dots: false,
    arrows: false,
    draggable: false,
  });

}

function featuredProdusctSlider() {
  $('#tab1').on('click', function () {
    $('#tab1').children().addClass('active__tab');
    $('#tab2').children().removeClass('active__tab');
    $('#tab3').children().removeClass('active__tab');
    $('#tab4').children().removeClass('active__tab');

    $('#tab-1').css('display', "block");
    $('#tab-2').css('display', 'none');
    $('#tab-3').css('display', 'none');
    $('#tab-4').css('display', 'none');
    $('.sliders').slick("setPosition");
  })

  $('#tab2').on('click', function () {
    $('#tab1').children().removeClass('active__tab');
    $('#tab2').children().addClass('active__tab');
    $('#tab3').children().removeClass('active__tab');
    $('#tab4').children().removeClass('active__tab');

    $('#tab-1').css('display', "none");
    $('#tab-2').css('display', 'block');
    $('#tab-3').css('display', 'none');
    $('#tab-4').css('display', 'none');
    $('.sliders').slick("setPosition");
  })

  $('#tab3').on('click', function () {
    $('#tab1').children().removeClass('active__tab');
    $('#tab2').children().removeClass('active__tab');
    $('#tab3').children().addClass('active__tab');
    $('#tab4').children().removeClass('active__tab');

    $('#tab-1').css('display', "none");
    $('#tab-2').css('display', 'none');
    $('#tab-3').css('display', 'block');
    $('#tab-4').css('display', 'none');
    $('.sliders').slick("setPosition");
  })

  $('#tab4').on('click', function () {
    $('#tab1').children().removeClass('active__tab');
    $('#tab2').children().removeClass('active__tab');
    $('#tab3').children().removeClass('active__tab');
    $('#tab4').children().addClass('active__tab');

    $('#tab-1').css('display', "none");
    $('#tab-2').css('display', 'none');
    $('#tab-3').css('display', 'none');
    $('#tab-4').css('display', 'block');
    $('.sliders').slick("setPosition");
  })
}



function toggleMainBackground() {
  setInterval(() => {
    if ($('.main_image_one').css('opacity') == 1) {
      $('.main_image_one').fadeTo(1000, 0);
      $('.main_image_two').fadeTo(1000, 1);
    } else {
      $('.main_image_one').fadeTo(1000, 1);
      $('.main_image_two').fadeTo(1000, 0);
    }
  }, 7000);


  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 170 && window.pageYOffset < 500) {
      console.log(1)
      document.querySelector('.main__background').style.opacity = 170 / (window.pageYOffset * 1.2);
      document.querySelector('.main__container').style.paddingTop = `${window.pageYOffset - 150}px`;
    } else if (window.pageYOffset < 170) {
      document.querySelector('.main__background').style.opacity = 1
    } else if (window.pageYOffset > 500) {
      document.querySelector('.main__background').style.opacity = 0
    }
  })
}

function timer() {

  var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

  var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.timer__days').innerHTML = days
    document.querySelector('.timer__hours').innerHTML = hours
    document.querySelector('.timer__minutes').innerHTML = minutes
    document.querySelector('.timer__seconds').innerHTML = seconds

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

function burgerMenu() {

  $('.burger__btn').on('click', function () {
    if ($('.container_nav').css('display') == "none") {
      $('.container_nav').css('display', 'flex')
      $('.head').css('display', 'none')
    } else {
      $('.container_nav').css('display', 'none')
    }
  })

  $('.dot__btn').on('click', function () {
    if ($('.head').css('display') == "none") {
      $('.head').css('display', 'flex')
      $('.container_nav').css('display', 'none')
    } else {
      $('.head').css('display', 'none')
    }
  })
}

$(document).ready(function () {
  burgerMenu();
  sliderInit();
  toggleMainBackground();
  timer();
  featuredProdusctSlider();
})