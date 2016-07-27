$(function(){

  //GLOBALS
  var slideSpeed = 260;

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
  function carousel(){
    // auto loop
    var speed = 5000;
    //var run = setInterval('rotate()', speed);

    // grab width and calculate left value
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);

    // move last item before first item
    // in case user clicks prev button.
    $('#slides li:first').before($('#slides li:last'));

    // set default item to correct position
    $('#slides ul').css({'left': left_value});

    // if user cliked prev button
    $('#prev').click(function(){
      // get right position
      var left_indent = parseInt($('#slides ul').css('left')) + item_width;
      // slide the item
      $('#slides ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
        // move last item and place as first item
        $('#slides li:first').before($('#slides li:last'));
        // set default item to correct position
        $('#slides ul').css({'left': left_value});
      });

      console.log('SLIDE LEFT ',$('#slides li'));
      // cancel link behavior
      return false;

    });


    // if user cliked next button
    $('#next').click(function(){
      // get right position
      var left_indent = parseInt($('#slides ul').css('left')) - item_width;
      // slide the item
      $('#slides ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
        // move first item and place as last item
        $('#slides li:last').after($('#slides li:first'));
        // set default item to correct position
        $('#slides ul').css({'left': left_value});
      });

      console.log('SLIDE RIGHT ',$('#slides li'));
      // cancel link behavior
      return false;

    });

    /*///
    // if mouse over pause auto rotation
    $('#slides').hover(
      function(){
        clearInterval(run);
      },
      function(){
        run = setInterval('rotate()',speed);
      }
    );*/
    
  };
  // run carousel
  carousel();

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
       carousel();
    };
      
  });
  

});

// simple function calls next link
// timer call function
function rotate(){
  $('#next').click();
};
