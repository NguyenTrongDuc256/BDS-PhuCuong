$(document).ready(function () {
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
        console.log("heklloo")
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
  $(".slider_for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".slider_nav",
  });
  $(".slider_nav").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: ".slider_for",
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
     
    ]
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

});
/*-----------------------resposive Space slider_nav----------------------------------*/ 

$(window).ready(function () {
  var a;
  var width = $(window).width();
  // console.log(width);
  if (width > 1600) {
    a = 29.5;
    startSpace (a);
  }else if( width <= 1600 && width > 600){
    a = 20;
    startSpace (a);
    // console.log(a);
  }
  else if(width <= 600){
    a = 10;
    startSpace (a);
    // console.log(a);
  }
});
/*------------------------hàm truyền biến cho dataSpace--------------------------------------*/ 

  function startSpace (n) {
    $("[data-space]").attr("data-space", n);
    var x = $("[data-space]");
    dataSpace(x);
  }
  /*---------------------hàm tạo khoảng giữa các slide-item của slick-----------------------------*/
function dataSpace(e) {
  e.each(function () {
    var $this = $(this),
      $space = $this.attr("data-space");

    $(".slick-slide").css({
      marginLeft: $space + "px",
      marginRight: $space + "px",
    });

    $(".slick-list").css({
      marginLeft: -$space + "px",
      marginRight: -$space / 2 + "px",
    });
  });
}
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