// over ride the default dropdown open so it slides all slick like
$(".dropdown > a").click(function () {
   $(".dropdown > .dropdown-menu").not($(this).siblings()).slideUp();
   $(this).siblings(".dropdown-menu").slideToggle();

   event.stopPropagation();

});

$(document).click( function(){

        $('.dropdown-menu').slideUp();

        $('.open-full').on('click', function() {
          $('#full-modal').css('height' , '100%');
        });

        $('.closebtn').on('click', function() {
          $('#full-modal').css('height' , '0');
        });
});

$(function() {
  $('.saa-relatedImages').insertAfter($('.saa-bodyText p:first'));
});

// Calculate tile height
$(function calcTileHeight() {
  var tile = $('.saa-landing .tile');
  var tileWidth = tile.width();
  tile.css('height' , tileWidth);

  $(window).resize(function() {
    calcTileHeight();
  });
});

// Landing page carousel
// Activate Carousel
$("#saaCarousel").carousel({interval: false}).carousel('cycle');

// Enable Carousel Controls
$(".left").click(function(){
    $("#saaCarousel").carousel("prev");
});
$(".right").click(function(){
    $("#saaCarousel").carousel("next");
});

$(function(){
    $( document ).trigger( "enhance" );
});
