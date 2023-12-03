// init Isotope
var $grid = $('.item-details').isotope({
    // options
  });
  // filter items on button click
  $('.filter').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var typed = new Typed('.type', {
    strings: [
    'Web Designer', 
    'Web Developer',
    'Wordpress Expert'
],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
})

////  sticky navigation jquery code
$(document).ready(function(){

    $(window).scroll(function(){
     if($(this).scrollTop() > 10){
       $(".header").addClass("sticky");
     }else{
      $(".header").removeClass("sticky");
     }
    });
  });