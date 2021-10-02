$(document).ready(function(){
    new WOW().init();

    
    $(function(){
        $('#scroll').simplyScroll();
    });

// ham-btn

$('.ham-btn').click(function(){
    $(this).toggleClass('active');
    
    if($(this).hasClass('active')){
        $('.menu').fadeIn();
    }else{
        $('.menu').fadeOut();
    }
});

$('.menu a').click(function(e){
    e.preventDefault();

    $('.menu').fadeOut();
    $('.ham-btn').removeClass('active');
});

// Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }

    $(window).scroll(function(){

        if($(window).scrollTop() > 1){
        $('#header').addClass('scroll');
        }else if($(window).scrollTop() < 1){
            $('#header').removeClass('scroll'); 
        }

        var skillOffset = $('#skill-box').offset().top;

        if($(window).scrollTop() > skillOffset){
            $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 3000,
            easing:'linear',
            step: function() {
            $this.text(Math.floor(this.countNum));
            },
            complete: function() {
            $this.text(this.countNum);
            //alert('finished');
            }

        });  
        });
        }
        
    });

    $('.menu-box a').click(function(e){
        e.preventDefault();
    });

    $('.top').click('click', function(event) {
    event.preventDefault();
    $('html, body').stop().animate({scrollTop: 0}, 500);
});


imagesProgress();
  

  function imagesProgress() {
      var preload = $('.preload'),
          $progressText = preload.find('.progress-text'),
          $progressBar = preload.find('.progress-bar'),
          imgLoad = imagesLoaded('body'),
          imgTotal = imgLoad.images.length,
          imgLoaded = 0,
          current = 0,
          progressTimer = setInterval(updateProgress, 1000 / 60),
          body = document.querySelector("body");;
       
      //로딩진행시
      imgLoad.on('progress', function() {
          body.classList.add('noneScroll');
          imgLoaded++;
      });
      
      function updateProgress() {
          var target = (imgLoaded / imgTotal) * 100;

          current += (target - current) * 0.1;
          $progressText.text(Math.floor(current) + '%');
          $progressBar.css({ width: current + '%' });
          
        //로딩진행끝날때
          if (current >= 100) {
              clearInterval(progressTimer);
              preload.addClass('preload-finish');
               body.classList.remove('noneScroll');
              $progressText
                  .delay(1000)
                  .animate({
                      
                  }, function() {
                      preload.fadeOut();
                  });
              
           //로딩진행후 실행할 함수
           imageLoadingAfter();
          }
          if (current > 99.9) {
              current = 100;
          }
      }
  }
//로딩진행후
function imageLoadingAfter() {
     /* $section1.find('.react_btn img').addClass('active');*/
  }

  var wid = $('.list li').outerWidth();
var num = $('.list li').length;
var totalWid = wid*num;
$('.list').width(totalWid); //()엔에 값이 없으면 선택자의 넓이 구해주고, 값이 있으면 ()안에 값으로 변경
var mleft = 0;

var timer = setInterval(move, 20);

$('#listBox').on('mouseenter',function(){
    clearInterval(timer);
});
 
 $('#listBox').on('mouseleave',function(){
    timer = setInterval(move, 20);
 });
 

function move(){
    mleft -= 2;
    if (mleft < - wid) {
        $('.list li').first().appendTo('.list');
        mleft = 0;
    }
    $('.list').css({'left' : mleft});
}

  var abPos = $('#main').outerHeight() * 2;
  var skPos = $('#main').outerHeight() * 2 + $('#about').outerHeight() * 3;
  var crPos = $('#main').outerHeight() * 2 + $('#about').outerHeight() * 3 + $('#skill-box').outerHeight() * 2.5;
  var ctPos = $(document).height();

  $('.menu-box a').click(function(e){
      e.preventDefault();
  });

    $('a.aboutMove').click(function(){
        $('body, html').animate({scrollTop:abPos},1000);  
    });

    $('a.skillMove').click(function(){
        $('body, html').animate({scrollTop:skPos},1000);  
    });

    $('a.careerMove').click(function(){
        $('body, html').animate({scrollTop:crPos},1000);  
    });

    $('a.cttMove').click(function(){
        // $('body, html').animate({scrollTop:ctPos},800);  
        $("body, html").animate({scrollTop:$(document).height()},1000);
    });


window.onload = function(){
setTimeout(function(){
    scrollTo(0,0);
}, 100);
}
});