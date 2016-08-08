$(function(){

  'use strict'

  //GLOBALS
  var slideSpeed = 260,
    speed = 500,
    id,
    prevButton, 
    nextButton,
    thumbnailClickOn =  Boolean,
    imageNum =  Boolean,
    audioOn = Boolean,
    totalSlides,
    currentSlide,
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
  function carousel(id, prevButton, nextButton, thumbnailClickOn, numSlides, imageNum, idLarge){

    // grab width and calculate left value
    var item_width = $(id + ' li').outerWidth(),
      left_value = item_width * (-1),
      firstImage = $(id + ' li:first').css('background-image');

    //console.log('slide div = ',id);
    //console.log('firstImage = ',firstImage);
    
    //THUMBNAIL LOADER: If carousel is used as thumbnail loader
    if( thumbnailClickOn == true ){
        // set main image as first image
        $(idLarge).css('background-image',firstImage);
        console.log('idLarge = ',$(idLarge).css('background-image'));

        // add border to first image thumbnail
        $(id + ' li:first').css({'background-color':'#f74b35','opacity':.7, 'border-bottom': '3px solid #000'});

        // thumbnail click switch to that image
        $('li').each(function(index){
            var _this = $(this);
            _this.click(function(){
              // switch background color
              $('li').css({'opacity': 1, 'border-bottom': 'none'});
              _this.css({'background-color':'#f74b35','opacity':.7, 'border-bottom': '3px solid #000'});
              // switch background image/fade
              $(idLarge).animate({'opacity':0}, 300, 'swing', function(){
                  $(idLarge).css('background-image',_this.css('background-image'));
                  $(idLarge).animate({'opacity':1}, 300, 'swing');
                  console.log('idLarge = ',$(idLarge).css('background-image'));
              });
              //console.log("li pressed = ",$(this));
          });
        });
    }else{
      console.log('thumbnailClickOn = ',thumbnailClickOn);
    };


    // IMAGE NUMBER: If imageNum = true show image numbers and count
    if( imageNum == true ){
        var totalSlides = $('li').length,
            currentSlide = 1;
        $('#image-num').text(currentSlide + '/' + totalSlides);
        console.log('id = ',id,' Number of Images = ',$('li').length);
    };


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

        // If imageNum = true 
        if( imageNum == true ){
            currentSlide--;
            $('#image-num').text(currentSlide + '/' + totalSlides);
            if( currentSlide == 0 ){
                currentSlide = totalSlides;
                $('#image-num').text(currentSlide + '/' + totalSlides);
            };
        };

        console.log('SLIDE LEFT ');
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

        // If imageNum = true 
        if( imageNum == true ){
            currentSlide++;
            $('#image-num').text(currentSlide + '/' + totalSlides);
            if( currentSlide >= totalSlides ){
                currentSlide = 0;
            };
        };

        console.log('SLIDE RIGHT ');
        // cancel link behavior
        return false;

    });
    
  };
  ///// RUN CAROUSELS
  // run carousel for carousel-component landing page
  carousel('#slides', '#prev', '#next', false, 1);
  // run carousel for carousel-component object page
  carousel('#slides-obj', '#prevObj', '#nextObj', true, 5, false, '#large-image');
  // run carousel for object-overview-carousel
  carousel('#object-slides', '#prev', '#next', false, 1, true);
  // run carousel for object-related-content-carousel
  carousel('#object-related-content-slides', '#prev', '#next', false, 1, true);


  ///// LOAD MORE BUTTON FOR CURATED-VIEWS *** (if desktop size)
  $('#load-curated').click(function(e){
      e.preventDefault();
      var liHeight = 0;
      var listHeight = $('.carousel-component-list ul').height();
      $('.carousel-component-list li').each(function(index){
            liHeight += $(this).height()/2.746;
            console.log('<li> ',listHeight,' liHeight ',liHeight);
            return liHeight;
      });
      //animate height of ul to reveal all images
      $('.carousel-component-list ul').animate({'height': liHeight}, 250, 'swing');//magic number = height: 1167px;

  }); 


  ///// AUDIO
  var audio1 = new Audio('../pma/audio/Classical Indian Music.mp3'),
      trackVar,
      id,
      currTimeText,
      proGressTime,
      pBar;

    
  function audioPlayer(trackVar, id, currTimeText, proGressTime, pBar) {

      var duration = trackVar.duration;

      //toggle play button
      $(id).click(function(){
          if(trackVar.paused){
              trackVar.play();
              $('#playOn').addClass('object-audio-component-hide');
              $('#pauseOn, #pauseOnRight').removeClass('object-audio-component-hide');
              trackAudio();
              console.log('Track ',trackVar, ' on ', '  audioOn = ', audioOn);
            }else{
              trackVar.pause();
              $('#playOn').removeClass('object-audio-component-hide');
              $('#pauseOn, #pauseOnRight').addClass('object-audio-component-hide');
              console.log('Track ',trackVar, ' mute', '  audioOn = ', audioOn);
          };
          console.log( trackVar, ' ',trackVar.duration );
      });

      //Track Audio currentime/length - Move Progess Bar
      function trackAudio(){
          trackVar.ontimeupdate = function(){
            seekTimerUpdate(currTimeText, proGressTime, pBar);
          };
      };
      
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


        $(pBar).width(time + '%');

        console.log('Progress Bar width ',$(pBar).width());
        console.log('currTimeText ',(curmins+":"+cursecs), ' proGressTime ', (durmins+":"+dursecs));

      }
  };
  // Run Audio
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
