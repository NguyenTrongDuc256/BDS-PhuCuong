$(document).ready(function () {
  $('.menu-list > li').click(function(){
    $(this).closest('li').toggleClass("active");
  });
  let params = new URL(document.location).searchParams;
  let name = params.get("site");
  var elem = $(".menu-list > li");
  var js_menu = [
    "home",
    "02_vechungtoi",
    "07_batdongsan",
    "03_sukien",
    "05_tuyendung",
    "09_lienhe",
  ];
  js_menu.forEach(function (a, b) {
    if (a === name) {
      elem.eq(b + 1).addClass("active-color");
    }
  });
  var js_menu3 = ["04_chitietsukien", "06_chitiettuyendung", "08_chitietbds"];
 
      if("04_chitietsukien" === name){
        elem.eq(4).addClass("active-color");
      }
      else if("06_chitiettuyendung" === name){
        elem.eq(5).addClass("active-color");
      }
      else if("08_chitietbds" === name){
        elem.eq(3).addClass("active-color");
      }
     
   

  var header = $(".site43_head_col0_BDSPhuCuong");
  js_menu3.forEach(function (x) {
    if (x !== name) {
      js_menu.forEach(function (q) {
        if(name === q){
          if (header.length > 0) {
            $(window).scroll(function () {
              var e = $(window).scrollTop();
                if (e > 0) {
                  header.addClass("scroll");
                } else {
                    header.removeClass("scroll"); 
                    // console.log("mo2");
                }
            });
          }
        } 
    });
    }else if(x === name){
      header.addClass("scroll");
      console.log("name:"+name);
      
    }
  });
});
$(function () {
  function slideMenu() {
      var activeState = $(".menu_header").hasClass("active");
      $(".menu_header").animate(
          { left: activeState ? "0%" : "-100%" },400);}
  $(".menu-wrapper").click(function (event) {
      event.stopPropagation();
      $(".hamburger").toggleClass("open");
      $(".menu_header").toggleClass("active");
      slideMenu();

      $("body").toggleClass("overflow-hidden");
  });

  // $(".menu-list")
  //     .find(".accordion-toggle")
  //     .click(function () {
  //         $(".menu-list .accordion-content")
  //             .not($(this).next())
  //             .slideUp("fast")
  //             .removeClass("open");
  //         $(".menu-list .accordion-toggle")
  //             .not(jQuery(this))
  //             .removeClass("active-tab")
  //             .find(".menu-link")
  //             .removeClass("active");
  //     });
});$(document).ready(function () {
    $("#slide-home").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
      //   autoplay: true,
      //   autoplayTimeout: 2000,
        items: 1,
        dots: true,
      });
});$(document).ready(function () {
  $(".left_sile-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".right_sile-content",
  });
  $(".right_sile-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".left_sile-content",
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
    dots: false,
    fade: true,
    // centerMode: true,
    // focusOnSelect: true
  });
  $(".slide_bdsDeXuat").owlCarousel({
    loop: true,
    margin: 84,
    nav: true,
    navText: ["<img src='./images/site43/prev2.png'>", "<img src='./images/site43/next2.png'>"],
    items: 2,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      321: {
        items: 1,
        margin: 10,
      },
      400: {
        items: 1,
        margin: 10,
      },
      600: {
        items: 1,
        margin: 10,
      },
      800: {
        items: 1.5,
        margin: 30,
      },
      1000: {
        items: 2,
        margin: 40,
      },
      1200: {
        items: 2,
      },
    },
  });

  $("#slide_cacquydautu").owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:2000,
    margin: 10,
    nav: false,
    items: 1,
    dots: true,
    animateIn: 'fadeInDown',
    animateOut: 'flipOutX',
  });
  $("#list_logo").owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:2000,
    margin: 30,
    nav: false,
    items: 5,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      321: {
        items: 2,
      },
      400: {
        items: 3,
      },
      600: {
        items: 4,
      },
      800: {
        items: 4,
        
      },
      1000: {
        items: 5,
      },
    },
  });
 
  $("#slide_sukien").owlCarousel({
    loop: true,
    margin: 84,
    nav: true,
    navText: ["<img src='./images/site43/prev1.png'>", "<img src='./images/site43/next1.png'>"],
    items: 1,
    dots: false,
    responsive: {
      0: {
        margin:30,
      },
      
      1000: {
        margin: 84,
      },
    },
  });
  $(".slide_sukienkhac").owlCarousel({
    loop: true,
    margin: 38,
    nav: true,
    navText: ["<img src='./images/site43/prev1.png'>", "<img src='./images/site43/next1.png'>"],
    items: 3,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      321: {
        items: 1,
      },
      400: {
        items: 1,
      },
      500: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
$(document).ready(function(){
    $(function () {
        // var elem = $(".wrapper_tabcontent .tabcontent");
        // elem.eq(0).addClass("js-show-tabcontent");
        // contentl = elem.length;
        $(".footer__select-ngonngu label").click(function () {
            // var index = $(this).index();
            $(".footer__select-ngonngu label").removeClass("active").css("o");
            $(this).addClass("active");
            // elem.removeClass("js-show-tabcontent");
            // elem.eq(index).addClass("js-show-tabcontent");
        })
    });
});