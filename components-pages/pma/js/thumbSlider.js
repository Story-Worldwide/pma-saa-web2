var resultsPage=0;

var ImageSlider = new Class({
   Implements: [Options, Events],
   options: {
      objToSlide: '',
      sliderElements: '', /* can be any html element (div, p, a, span) */
      numOfElementsToSlide: 2, /* this is the number of elements that slide when the button is hit */
      numOfElementsShown: 3, /* this is the total number of elements shown at any give time */
      leftBtn: '',
      rightBtn: '',
      easing: Fx.Transitions.Expo.easeInOut
      //onSlideComplete: $empty
      
   },
   initialize: function(options){
      this.setOptions(options);
      this.options.objToSlide = $(this.options.objToSlide);
      if(!(this.options.objToSlide)){return false;}//do nothing
      this.setup();
   },
   
   setup: function(){

      var o = this.options;
      o.sliderElements = (o.objToSlide.getElements(o.sliderElements));
      o.leftBtn = $(o.leftBtn);
      o.rightBtn = $(o.rightBtn);
      o.objToSlide.setStyles({
         position: 'relative',
         left: 0
      });
      var element = $(o.sliderElements[0]);
      var margins = parseFloat(element.getStyle('margin-left')) + parseFloat(element.getStyle('margin-right'));
      var size  = element.getSize();
      o.elementWidth = size.x + margins;
      o.objToSlide.setStyle('width', (o.elementWidth * o.sliderElements.length));
      o.index = 0;
      o.total = o.sliderElements.length - o.numOfElementsShown;
      o.totalMoves = -(o.total / o.numOfElementsToSlide);
      o.myFx = new Fx.Morph(o.objToSlide, {duration: 500, transition: o.easing, link: 'chain'});
      
      o.leftBtn.addEvent("click", this.leftClick.bindWithEvent(this));
      o.rightBtn.addEvent("click", this.rightClick.bindWithEvent(this));
   },
   
   leftClick: function(e){
      e.stop();
      if(this.sliding){return;}
      var o = this.options;
      var newPos;
      o.index += 1;
      if(o.index < 0){
         newPos = (o.elementWidth * o.numOfElementsToSlide)*o.index;
      }else{
         o.index = 0;
         newPos = 0;
      }
      var cur = o.objToSlide.getCoordinates(o.objToSlide.getParent()).left;
      if(cur == newPos){return false;}
      this.slide(newPos);
   },
   
   rightClick: function(e){
      e.stop();
      if(this.sliding){return;}
      var o = this.options;
      var newPos;
      o.index -= 1;
      if(o.index >= o.totalMoves){
         newPos = (o.elementWidth * o.numOfElementsToSlide)*o.index;
      }else{
         o.index = o.totalMoves;
         newPos = (o.elementWidth * o.numOfElementsToSlide)*o.index;
      }
      var cur = o.objToSlide.getCoordinates(o.objToSlide.getParent()).left;
      if(cur == newPos){return false;}
      this.slide(newPos);
   },
   
   slide: function(newPos){
      this.sliding = true;
      this.options.myFx.start({
         'left': newPos
      }).chain(function(){
         this.sliding = false;
         this.fireEvent('onSlideComplete', this.options.index);
      }.bind(this));
   },
   
   slideTo: function(pos){

      if($type(pos) != "number"){return false;}
      var o = this.options;
      pos = pos + 1;
      var newPos;
      o.index = -(((pos - o.numOfElementsShown) / o.numOfElementsToSlide).round());
      if(o.index >= o.totalMoves){
         newPos = (o.elementWidth * o.numOfElementsToSlide)*o.index;
      }else{
         o.index = o.totalMoves;
         newPos = (o.elementWidth * o.numOfElementsToSlide)*o.index;
      }
      this.slide(Math.min(0,newPos));
   }
});
 
 
var lastOn="thumb0"; // reset for fade method.
var lastOnP="thumb0_p"; // reset for fade method.

function clickSwitch(thumbClicked,obID) {
//alert(obID);
var imgSrc = document.getElementById(thumbClicked).src;
var element = document.getElementById("objectRecordimg");
element.setAttribute("src", imgSrc);

var element = document.getElementById("objectBigRecordimg");
element.setAttribute("src", imgSrc);

// swap the download links
var str = imgSrc.slice(46, -4);
var res = encode64(str);
var obID = encode64(obID);

document.getElementById('getIt_s').href = "../s.php?slx=" + res;
document.getElementById('getIt_s').onclick = function(){trackThisSLX(obID, res);};

document.getElementById('getIt_z').href = "../s.php?slx=" + res;
document.getElementById('getIt_z').onclick = function(){"_gaq.push([\"_trackEvent\",\"Object_Download\", \"" + obID + "\", \"" + res +"\"]);"};

var now = new Date();
var time = now.getTime();
time += 3600 * 1000;
now.setTime(time);
document.cookie = 
    'getImage=' + res + 
    '; expires=' + now.toUTCString() + 
    '; path=/';

document.getElementById(lastOn).morph({'opacity': 1.0 });


lastOn=thumbClicked;

document.getElementById(thumbClicked).morph({'opacity': 0.3 });

document.getElementById(lastOnP).morph({'opacity': 1.0 });
lastOnP=thumbClicked + "_p";
document.getElementById(thumbClicked + "_p").morph({'opacity': 0.3 });


}


        window.addEvent('domready', function(){
        if(resultsPage==1){
                                          

           var mySlider = new ImageSlider({

               objToSlide: 'sliderContainer',
               sliderElements: 'div',
               numOfElementsToSlide: 2, 
               numOfElementsShown: 4, 
               leftBtn: 'leftBtn',
               rightBtn: 'rightBtn',
               onSlideComplete: function(index){
                  $('callBack').empty().appendText("current index is: " + index);
               }
            });
            $('slideToLink').addEvent('click', function(){
               mySlider.slideTo($('slideTo').value.toInt());

            });
            }
         }); 