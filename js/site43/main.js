$(document).ready(function () {
    $("#slide_sukienin").owlCarousel({
      loop: true,
      margin: 84,
      nav: true,
      navText: ["<img src='./images/site43/prev1.png'>", "<img src='./images/site43/next1.png'>"],
      items: 1,
      dots: false,
    });
    $(function () {
          var elem = $(".wrapper_tabcontent .tabcontent");
          elem.eq(0).addClass("js-show-tabcontent");
          contentl = elem.length;
          $(".nav_tabs label").click(function () {
              var index = $(this).index();
              $(".nav_tabs label").removeClass("active");
              $(this).addClass("active");
              elem.removeClass("js-show-tabcontent");
              elem.eq(index).addClass("js-show-tabcontent");
          })
      });
    $('.continue').click(function () {
          $('.nav_tabs > .active').next('label').find('a').trigger('click');
      });
      $('.back').click(function () {
          $('.nav_tabs > .active').prev('label').find('a').trigger('click');
      });
  });
  