(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

var timer = null;
var end = "2024-01-05";
var toZero;
var toZero2;
var oDay = document.getElementById("day");
var oHour = document.getElementById("hour");
var oMinute = document.getElementById("minute");
var oSecond = document.getElementById("second");

var oDay2 = document.getElementById("day2");
var oHour2 = document.getElementById("hour2");
var oMinute2 = document.getElementById("minute2");
var oSecond2 = document.getElementById("second2");

toZero = oDay.innerHTML = oHour.innerHTML = oMinute.innerHTML = oSecond.innerHTML = "00";
toZero2 = oDay2.innerHTML = oHour2.innerHTML = oMinute2.innerHTML = oSecond2.innerHTML = "00";

countDown();
timer = setInterval(countDown, 1000);

function countDown() {　　
  var timedate = new Date(Date.parse(end.replace(/-/g, "/"))); 
  var now = new Date(); 
  var date = (timedate.getTime() - now.getTime()) / 1000; 
  var day = Math.floor(date / (60 * 60 * 24));
  var _hour = date - day * 60 * 60 * 24;
  var hour = Math.floor(_hour / (60 * 60));
  var _minute = _hour - hour * 60 * 60;
  var minute = Math.floor(_minute / (60));
  var _second = _minute - minute * 60;
  var second = Math.floor(_second);

  function toDou(n) {
      if (n < 10) {
        return '0' + n;
      } else {
        return '' + n;
      }
    } 
  if (date > 0) {
    oDay.innerHTML = toDou(day);
    oHour.innerHTML = toDou(hour);
    oMinute.innerHTML = toDou(minute);
    oSecond.innerHTML = toDou(second);

    oDay2.innerHTML = toDou(day);
    oHour2.innerHTML = toDou(hour);
    oMinute2.innerHTML = toDou(minute);
    oSecond2.innerHTML = toDou(second);

  } else {
    btn.className = "";
    btn.className = "btn";
    btn.onclick = function() {
      alert("oops")
    }
    endtime.value = "";
    clearInterval(timer);
    toZero;
    toZero2;
  }
}

