$(function(){

  //GLOBALS
  var slideSpeed = 260,
    speed = 500,
    id,
    prevButton, 
    nextButton,
    thumbnailClickOn =  Boolean,
    audioOn = Boolean,
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


  ///// AUDIO
  var audio1 = new Audio('../pma/audio/Classical Indian Music.mp3');
    
  function audioPlayer(trackVar, id, currTimeText, proGressTime, pBar) {
      var id,
        trackVar,
        currTimeText,
        proGressTime,
        pBar,
        duration = trackVar.duration;

      //toggle play button
      $(id).click(function(){
          if(trackVar.paused){
              trackVar.play();
              console.log('Track ',trackVar, ' on ', '  audioOn = ', audioOn);
            }else{
              trackVar.pause();
              console.log('Track ',trackVar, ' mute', '  audioOn = ', audioOn);
          };
          console.log( trackVar, ' ',trackVar.duration );
      });

      //PROGRESS BAR GET idEO PROGRESSION CODE - http://www.developphp.com/ideo/JavaScript/ideo-Duration-and-Current-Play-Time-Programming-Tutorial
      trackVar.addEventListener('timeupdate', seekTimerUpdate(currTimeText, proGressTime, pBar), false);
      function seekTimerUpdate(currTimeText, proGressTime, pBar){
        var time = trackVar.currentTime * (100/trackVar.duration),
        curmins = Math.floor(trackVar.currentTime /60),
        cursecs = Math.floor(trackVar.currentTime - curmins * 60),
        durmins = Math.floor(trackVar.duration /60),
        dursecs = Math.floor(trackVar.duration - durmins * 60);

        if(cursecs < 10){ cursecs = "0" + cursecs; };
        if(dursecs < 10){ dursecs = "0" + dursecs; };
        if(curmins < 10){ curmins = "0" + curmins; };
        if(durmins < 10){ durmins = "0" + durmins; };

        $(currTimeText).text(curmins+":"+cursecs);
        $(proGressTime).text(durmins+":"+dursecs);


        //$(pBar).width(time + '%');
        curtime = parseInt(trackVar.currentTime, 10);
        $(pBar).attr("value", curtime);

        console.log('Progress Bar width ',$(pBar).width(), ' ', $(pBar));
        console.log('currTimeText ',(curmins+":"+cursecs), ' proGressTime ', (durmins+":"+dursecs));

      }
  };
  // rRun audio
  audioPlayer(audio1, '#playButton', '#currTime_box','#progress_box','#progressBar');

  /*audio1.play(); - This will play the music.
  audio1.pause(); - This will stop the music.
  audio1.duration; - Returns the length of the music track.
  audio1.currentTime = 0; - This will rewind the audio to the beginning.
  audio1.loop = true; - This will make the audio track loop.
  audio1.muted = true; - This will mute the track*/


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
