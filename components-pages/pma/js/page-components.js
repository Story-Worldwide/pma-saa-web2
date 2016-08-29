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
    imgArr = [],
    openNav = true;

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


  /*///////CAROUSEL SCRIPT
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
      $(idLarge).css('background-image',firstImage).css({
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center'
      });
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
        });
      });
      console.log('thumbnailClickOn = ',thumbnailClickOn);
    }else if( thumbnailClickOn == false ){
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
    $(prevButton).click(function(evt){
      console.log('::carousel previous::');
      evt.preventDefault();
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
    $(nextButton).click(function(evt){
      console.log('::carousel next::');
      evt.preventDefault();
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
  // carousel('#slides', '.carousel-component-top #prev', '.carousel-component-top #next', false, 1);
  // run carousel for carousel-component object page
  //carousel('#slides-obj', '.object-carousel-component-top .prevObj', '.object-carousel-component-top .nextObj', true, 5, false, '#large-image');
  // run carousel for object-overview-carousel
  //carousel('#object-slides', '.object-overview-carousel-top .prev', '.object-overview-carousel-top .carousel-next', false, 1, true);
  // run carousel for object-related-content-carousel
  //carousel('#object-related-content-slides', '.object-related-content-carousel-top .prev', '.object-related-content-carousel-top .carousel-next', false, 1, true);*/


  function smartCarousel(containerEl, isThumbLoader, numSlides, showImageNums) {
    var slideContainer = $('.carousel-slide-container', containerEl),
        prevButton = $('.carousel-button-prev', containerEl),
        nextButton = $('.carousel-button-next', containerEl),
        largeImage = $('.carousel-large-image', containerEl);

    // grab width and calculate left value
    var item_width = slideContainer.find('li').outerWidth(),
        left_value = item_width * -1,
        firstImage = slideContainer.find('li:first').css('background-image');

    //console.log('slide div = ',id);
    //console.log('firstImage = ',firstImage);

    //THUMBNAIL LOADER: If carousel is used as thumbnail loader
    if( isThumbLoader ){
      // set main image as first image
      largeImage.css('background-image',firstImage).css({
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center'
      });
      console.log('idLarge = ', largeImage.css('background-image'));

      // add border to first image thumbnail
      slideContainer.find('li:first').css({'background-color':'#f74b35','opacity':.7, 'border-bottom': '3px solid #000'});

      // thumbnail click switch to that image
      slideContainer.find('li').each(function(index){
        var _this = $(this);
        _this.click(function(){
          // switch background color
          $('li').css({'opacity': 1, 'border-bottom': 'none'});
          _this.css({'background-color':'#f74b35','opacity':.7, 'border-bottom': '3px solid #000'});
          // switch background image/fade
          largeImage.animate({'opacity':0}, 300, 'swing', function(){
            largeImage.css('background-image',_this.css('background-image'));
            largeImage.animate({'opacity':1}, 300, 'swing');
            console.log('idLarge = ', largeImage.css('background-image'));
          });
        });
      });

    };
    console.log('thumbnailClickOn = ',isThumbLoader);


    // IMAGE NUMBER: If imageNum = true show image numbers and count
    if( showImageNums ){
      var totalSlides = slideContainer.find('li').length,
        currentSlide = 1;
      $('#image-num', containerEl).text(currentSlide + '/' + totalSlides);
      console.log('id = ', slideContainer,' Number of Images = ', slideContainer.find('li').length);
    };


    // move last item before first item
    // in case user clicks prev button.
    slideContainer.find('li:first').before( slideContainer.find('li:last'));

    // set default item to correct position
    slideContainer.find('ul').css({'left': left_value});

    // if user cliked prev button
    $(prevButton).on('click', function(evt){
        console.log('::carousel previous::');
        evt.preventDefault();
        // get right position
        var left_indent = parseInt($('ul').css('left')) + (item_width * numSlides);
        // slide the item
        slideContainer.find('ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
          // move last item and place as first item
          slideContainer.find('li:first').before( slideContainer.find('li:last'));
          // set default item to correct position
          slideContainer.find('ul').css({'left': left_value});
        });

        // If imageNum = true
        if( showImageNums){
          currentSlide--;
          $('#image-num').text(currentSlide + '/' + totalSlides);
          if( currentSlide == 0 ){
            currentSlide = totalSlides;
            $('#image-num', containerEl).text(currentSlide + '/' + totalSlides);
          };
        };

        // cancel link behavior
        return false;

    });


    // Next Button
    $(nextButton).on('click', function(evt){
        console.log('::carousel next::');
        evt.preventDefault();
        // get right position
        var left_indent = parseInt($('ul').css('left')) - (item_width * numSlides);
        // slide the item
        slideContainer.find('ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
        // move first item and place as last item
        slideContainer.find('li:last').after(slideContainer.find('li:first'));
        // set default item to correct position
        slideContainer.find('ul').css({'left': left_value});
      });

      // If imageNum = true
      if( showImageNums){
        currentSlide++;
        $('#image-num', containerEl).text(currentSlide + '/' + totalSlides);
        if( currentSlide >= totalSlides ){
          currentSlide = 0;
        };
      };

      // cancel link behavior
      return false;

    });

    //Touch Slider
    function touchSlier(){
        var hammertime = new Hammer(containerEl); 
        slideSpeed = 50;  
        hammertime.on("swipeleft", function() {
            var left_indent = parseInt($(' ul').css('left')) + (item_width * numSlides);
            // slide the item
            slideContainer.find('ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
                // move first item and place as last item
                slideContainer.find('li:last').after(slideContainer.find('li:first'));
                // set default item to correct position
                slideContainer.find('ul').css({'left': left_value});
            }); 

            // If imageNum = true
            if( showImageNums){
              currentSlide--;
              $('#image-num').text(currentSlide + '/' + totalSlides);
              if( currentSlide == 0 ){
                currentSlide = totalSlides;
                $('#image-num', containerEl).text(currentSlide + '/' + totalSlides);
              };
            };

            // cancel link behavior
            return false;
        });

        hammertime.on("swiperight", function() {
            var left_indent = parseInt($(' ul').css('left')) - (item_width * numSlides);
            // slide the item
            slideContainer.find('ul').animate({'left': left_indent}, slideSpeed, 'swing', function(){
                // move first item and place as last item
                slideContainer.find('li:last').after(slideContainer.find('li:first'));
                // set default item to correct position
                slideContainer.find('ul').css({'left': left_value});
            }); 

            // If imageNum = true
            if( showImageNums){
              currentSlide++;
              $('#image-num', containerEl).text(currentSlide + '/' + totalSlides);
              if( currentSlide >= totalSlides ){
                currentSlide = 0;
              };
            };

            // cancel link behavior
            return false;
        });
    };
    touchSlier(); 

  };
  //////FIRE SMART CAROUSEL - (PARAMS = containerEl, isThumbLoader, numSlides, showImageNums)
  $('.carousel.carousel-artobject-main').each(function(index) {
    smartCarousel( $(this), true, 5, false);
  });

  $('.carousel.carousel-related-content').each(function(index) {
    smartCarousel( $(this), false, 1, true)
  });

  $('.carousel.carousel-secondary').each(function(index) {
    smartCarousel( $(this), false, 1, false)
  });
  //carousel-component-top component
  $('.carousel.carousel-component-top').each(function(index) {
    smartCarousel( $(this), false, 1, false)
  });
  //explore the details component
  $('.carousel.explore-the-details').each(function(index) {
    smartCarousel( $(this), false, 1, true)
  });
  //explore feature item component
  $('.carousel.carousel-feature-main').each(function(index) {
    smartCarousel( $(this), false, 1, true)
  });



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



  ///// FEATURE ITEM NAV
  // open slider
  $('.open-feature').click(function(){
      $('.feature-item-nav-block').addClass('display-none');
      $('.feature-item-nav-top').removeClass('display-none');
  });
  // close slider
  $('#close-feature-slider').click(function(){
      $('.feature-item-nav-block').removeClass('display-none');
      $('.feature-item-nav-top').addClass('display-none');
  });



  ///// EXPLORE FILTER DROP-DOWN COMPONENT
  // Hover
  $('.explore-filter-dropdown-JS').hover(
    function () {
        $('.explore-filter-dropdown-arrow-drop', this).css('background-position', '-11 0');
      },
      function () {
       $('.explore-filter-dropdown-arrow-drop', this).css('background-position', '');
      }
  );
  // Dropdown
  /*$('.explore-filter-dropdown-JS').click(function(event){
        event.stopPropagation();
        if ( openNav == true ){
            $('.explore-filter-dropdown-holder ul').removeClass('display-none');
            openNav = false;
            console.log('OPEN ',openNav);
        }else {
            $('.explore-filter-dropdown-holder ul').addClass('display-none');
            openNav = true;
            console.log('CLOSED',openNav);
        }
  });*/ 
  $('.explore-filter-dropdown-JS').each(function(index){
        $(this).click(function(event){
            event.stopPropagation();
            if ( openNav == true ){
                $('.explore-filter-dropdown-holder ul', index).removeClass('display-none');
                openNav = false;
                console.log('OPEN ',index,'  ',openNav);
            }else {
                $('.explore-filter-dropdown-holder ul', index).addClass('display-none');
                openNav = true;
                console.log('CLOSED ',index,'  ',openNav);
            }
      });
  });

  ///DATE RANGE SLIDER
  $( "#slider-range" ).slider({
      range: true,
      min: 1200,
      max: 1900,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "years" + ui.values[ 0 ] + " - years" + ui.values[ 1 ] );
      }
  });
  //
  $( "#amount" ).val( "years" + $( "#slider-range" ).slider( "values", 0 ) +
      " - years" + $( "#slider-range" ).slider( "values", 1 ) );



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


  ///// RESIZE FUNCTION
  $(window).resize(function(){
    if( $(window).width() <= 400 ){
    };

  });


});

// simple function calls next link
// timer call function
function rotate(){
  $('#next').click();
};
