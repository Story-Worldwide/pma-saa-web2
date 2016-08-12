 //SWIPE/TOUCH-SLIDER 
  function touchSwipeImg(id, imgContainer){
      // http://codepen.io/darthRayzor/pen/QEzJXj
      // https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
      if (navigator.msMaxTouchPoints) {

        $(id).addClass('ms-touch');

        $(id).on('scroll', function() {
          $('.slide-image').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
        });

      } else {

        var slider = {

          el: {
            slider: $(id),
            holder: $(imgContainer),
            imgSlide: $(".slide-image")
          },

          slideWidth: $(id).width(),
          touchstartx: undefined,
          touchmovex: undefined,
          movex: undefined,
          index: 0,
          longTouch: undefined,
          
          init: function() {
            this.bindUIEvents();
            // add class to each <li>
            $('li').each(function(index){
                $(this).addClass('slide-image');
            });
            console.log( 'slider id = ',id, ' slider image = ', $(".slide-image"));
          },

          bindUIEvents: function() {

            this.el.holder.on("touchstart", function(event) {
              slider.start(event);
            });

            this.el.holder.on("touchmove", function(event) {
              slider.move(event);
            });

            this.el.holder.on("touchend", function(event) {
              slider.end(event);
            });

          },

          start: function(event) {
            // Test for flick.
            this.longTouch = false;
            setTimeout(function() {
              window.slider.longTouch = true;
            }, 250);

            // Get the original touch position.
            this.touchstartx =  event.originalEvent.touches[0].pageX;

            // The movement gets all janky if there's a transition on the elements.
            $('.animate').removeClass('animate');
          },

          move: function(event) {
            // Continuously return touch position.
            this.touchmovex =  event.originalEvent.touches[0].pageX;
            // Calculate distance to translate holder.
            this.movex = this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
            // Defines the speed the images should move at.
            var panx = 100-this.movex/6;
            if (this.movex < 600) { // Makes the holder stop moving when there is no more content.
              this.el.holder.css('transform','translate3d(-' + this.movex + 'px,0,0)');
            }
            if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
              this.el.imgSlide.css('transform','translate3d(-' + panx + 'px,0,0)');
            }
          },

          end: function(event) {
            // Calculate the distance swiped.
            var absMove = Math.abs(this.index*this.slideWidth - this.movex);
            // Calculate the index. All other calculations are based on the index.
            if (absMove > this.slideWidth/2 || this.longTouch === false) {
              if (this.movex > this.index*this.slideWidth && this.index < 2) {
                this.index++;
              } else if (this.movex < this.index*this.slideWidth && this.index > 0) {
                this.index--;
              }
            }      
            // Move and animate the elements.
            this.el.holder.addClass('animate').css('transform', 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)');
            this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' + 100-this.index*50 + 'px,0,0)');

          }

        };

        slider.init();
      }
  };
  //touchSwipeImg('#slide-one','.slide-one');

  function touchSwiper(id,imgContainer){
        var el = document.getElementById(id), // reference gallery's main DIV container
          gallerywidth = $(id).width(),//el.offsetWidth;
          ul = $(id + ' ul'),//el.getElementsByTagName('ul')[0],
          liscount = $(id + 'ul li'),//ul.getElementsByTagName('li').length, 
          curindex = 0, 
          ulLeft = 0;
          ul.width(gallerywidth * liscount + 'px');//ul.style.width = gallerywidth * liscount + 'px' // set width of gallery to parent container's width * total images
        console.log('id = ', id);

       ontouch(el, function(evt, dir, phase, swipetype, distance){
          if (phase == 'start'){ // on touchstart
             ulLeft = parseInt(ul.style.left) || 0 // initialize ulLeft var with left position of UL
          }
          else if (phase == 'move' && (dir =='left' || dir =='right')){ //  on touchmove and if moving left or right
              var totaldist = distance + ulLeft // calculate new left position of UL based on movement of finger
              ul.style.left = Math.min(totaldist, (curindex+1) * gallerywidth) + 'px' // set gallery to new left position
          }
          else if (phase == 'end'){ // on touchend
              if (swipetype == 'left' || swipetype == 'right'){ // if a successful left or right swipe is made
                  curindex = (swipetype == 'left')? Math.min(curindex+1, liscount-1) : Math.max(curindex-1, 0) // get new index of image to show
              }
              ul.style.left = -curindex * gallerywidth + 'px' // move UL to show the new image
          }
      }); // end ontouch
 
  };
  //touchSwiper('#slide-one','.slide-one');