$(function(){

  //GLOBALS
  var slideSpeed = 260,
    speed = 500,
    id,
    prevButton, 
    nextButton;

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
  function carousel(id, prevButton, nextButton, thumbnailClickOn, idLarge){

    console.log('slide div = ',id);
    // grab width and calculate left value
    var item_width = $(id + ' li').outerWidth(),
      left_value = item_width * (-1),
      thumbnailClickOn = false;

    //If carousel is used as thumbnail loader
    if( thumbnailClickOn == true ){

    };

    // move last item before first item
    // in case user clicks prev button.
    $(id + ' li:first').before($(id + ' li:last'));

    // set default item to correct position
    $(id + ' ul').css({'left': left_value});

    // if user cliked prev button
    $(prevButton).click(function(){
      // get right position
      var left_indent = parseInt($(id + ' ul').css('left')) + item_width;
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
      var left_indent = parseInt($(id + ' ul').css('left')) - item_width;
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
  // run carousel for carousel-component
  carousel('#slides', '#prev', '#next');

  ///// LOAD MORE FOR CURATED-VIEWS *** (if desktop size)
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
