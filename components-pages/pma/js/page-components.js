$(function(){

  //GLOBALS
  var slideSpeed = 260,
    speed = 500,
    id,
    prevButton, 
    nextButton,
    thumbnailClickOn =  Boolean,
    imgArr = [];

  ////////INCLUDES for component html files
  function include(html){
    var includes = $('.include');
    jQuery.each(includes, function(){
      var file =  $(this).data('include') + '.html';
      $(this).load(file);
      console.log('HTML LOADED = ',file);
    });
  };
  include();


  ///////CAROUSEL SCRIPT
  function carousel(id, prevButton, nextButton, thumbnailClickOn, numSlides, idLarge){

    // grab width and calculate left value
    var item_width = $(id + ' li').outerWidth(),
      left_value = item_width * (-1),
      firstImage = $(id + ' li:first').css('background-image');

    console.log('slide div = ',id);
    console.log('firstImage = ',firstImage);
    
    //If carousel is used as thumbnail loader
    if( thumbnailClickOn == true ){
        // set main image as first image
        $(idLarge).css('background-image',firstImage);
        console.log('idLarge = ',$(idLarge).css('background-image'));

        // thumbnail click switch to that image
        $('li').each(function(){
          $(this).click(function(){
            $(idLarge).css('background-image',$(this).css('background-image'));
             console.log('idLarge = ',$(idLarge).css('background-image'));
             //console.log("li pressed = ",$(this));
          });
        });
    }else{
      console.log('thumbnailClickOn = ',thumbnailClickOn);
    };
    console.log('thumbnailClickOn = ',thumbnailClickOn);

    // move last item before first item
    // in case user clicks prev button.
    $(id + ' li:first').before($(id + ' li:last'));

    // set default item to correct position
    $(id + ' ul').css({'left': left_value});

    // if user cliked prev button
    $(prevButton).click(function(){
      // get right position
      var left_indent = parseInt($(id + ' ul').css('left')) + (item_width * numSlides);
      // slide the item
      $(id + ' ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
        // move last item and place as first item
        $(id + ' li:first').before($(id + ' li:last'));
        // set default item to correct position
        $(id + ' ul').css({'left': left_value});
      });

      console.log('SLIDE LEFT ',$(id + ' li') );
      // cancel link behavior
      return false;

    });


    // Next Button
    $(nextButton).click(function(){
      // get right position
      var left_indent = parseInt($(id + ' ul').css('left')) - (item_width * numSlides);
      // slide the item
      $(id + ' ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
        // move first item and place as last item
        $(id + ' li:last').after($(id + ' li:first'));
        // set default item to correct position
        $(id + ' ul').css({'left': left_value});
      });

      console.log('SLIDE RIGHT ',$(id + ' li'));
      // cancel link behavior
      return false;

    });
    
  };
  ///// RUN CAROUSELS
  // run carousel for carousel-component landing page
  carousel('#slides', '#prev', '#next', false, 1);
  // run carousel for carousel-component object page
  carousel('#slides-obj', '#prevObj', '#nextObj', true, 5, '#large-image');



  ///// LOAD MORE BUTTON FOR CURATED-VIEWS *** (if desktop size)
  $('#load-curated').click(function(e){
      e.preventDefault();
      var liHeight = 0;
      var listHeight = $('.carousel-component-list ul').height();
      $('.carousel-component-list li').each(function(){
            liHeight += $(this).height();
            console.log('<li> ',listHeight,' liHeight ',liHeight);
            return liHeight;
      });
      //animate height of ul to reveal all images
      $('.carousel-component-list ul').animate({'height': liHeight/2}, 200, 'swing');

  }); 


  ///// RESIZE FUNCTION
  $(window).resize(function(){
    if( $(window).width() <= 400 ){
       // run carousel
       //carousel();
    };
      
  });
  

});

// simple function calls next link
// timer call function
function rotate(){
  $('#next').click();
};
