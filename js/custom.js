$(document).ready(function(){
  $('.preloader').fadeOut(4000);
});

 $(document).ready(function(){


  $('.games-slider').slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
      }
  },

  {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
          autoplaySpeed: 500,
      
    }
},
    ]
});

new WOW().init();

$('#countdown').countdown({
  year: 2021,
  month: 11,
  day: 15,
  hour: 12,
  minute: 59,
  second: 60,
});


$(".nicescroll-box").niceScroll({

  cursorwidth:8,
  cursoropacitymin:0.4,
  cursorcolor:'#0b001b',
  cursorborder:'none',
  cursorborderradius:4,
  autohidemode:'leave'


});




});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  // nav fixed;
  // if(scrolling > 150){
  //     $('nav').addClass('nav-bg');
  // }
  // else{
  //     $('nav').removeClass('nav-bg');
  // }
  // back to top;
  if(scrolling > 400){
      $('.back-to-top').fadeIn();
  }
  else{
      $('.back-to-top').fadeOut(); 
  }

  //hire===;
  if(scrolling > 500){
      $('.hire').fadeIn();
  }
  else{
      $('.hire').fadeOut(); 
  }
});

 // back to top;
$('.back-to-top').click(function(){
  $('body,html').animate({
      scrollTop : '0',
  },3000);
})


// animation scroll js;
var html_body = $('html, body');
$('nav a').on('click', function(){
    if(location.pathname.replace(/^\//,'') && location.hostname == this.hostname){
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if(target.length){
           html_body.animate({
               scrollTop: target.offset().top -0
           }, 1500);
           return false;
       } 
    }
});