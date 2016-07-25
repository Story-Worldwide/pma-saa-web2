$(document).ready(function(){
  
  // stop safari 
  $('a.dropdown-toggle').click(function (e) {
    e.preventDefault();
  });

// must use class if more then one per page
  $(".slideToOpen").click(function(){
  
   // alert('#'+$(this).data('id'));
 	var target = '#'+$(this).data('id'); //Get the target
	var position = (($(target).offset().top) -41);
	$('html, body').animate({ scrollTop: position }, 500);
	$('#'+$(this).data('id')).collapse('show');	
  });


// open only one open
$(".openOnlyOne").click(function () {
var divname= this.name;
$('#'+divname).siblings().slideUp(400);
setTimeout(function(){
	$('#'+divname).slideToggle(500);
}, 400);

return false;
});



// make ALL #hrefs scroll 
$('a[href*=#]').bind('click', function(e) {
		var target = $(this).attr("href");	
		var position = $('a[name*='+target.replace('#','')+']').offset().top;
		if(position!=0){
			//prevent the "normal" behaviour which would be a "hard" jump
			e.preventDefault();
			// perform animated scrolling by getting top-position of target-element and set it as scroll target
			$('html, body').animate({ scrollTop: position }, 500, function() {
				location.hash = target;  //attach the hash (#jumptarget) to the pageurl
			});
			return false;
		}
	});
	
	

// catch a target from Qstring to scroll to and open
catchSlideOpen = function(target)  {
  //  alert(target);
				 var position = (($(target).offset().top) -120);
					$('html, body').animate({ scrollTop: position }, 500);
					setTimeout(function(){
						openIt(target);
					}, 600);
  };
	openIt = function(target){
	//alert(target);
	$(target).collapse('show');
	}
	
	
	$('.eHeight').each(function () {
  var eHeight = $(this).parent().innerHeight();
  
  $(this).outerHeight(eHeight);
});





// catch a target from Qstring to scroll to and open Map
catchMapOpen = function(floorID,galleryID)  {
	//alert(floorID.getAttribute("id"));
	 //var showFloor = "floor" + floorID;


if(floorID.getAttribute("id") != "floorG"){
	//hideIt();
}



var	tempGallery = String(galleryID);
 	gallery = '_x3' + tempGallery.substring(0,1) + '_' + tempGallery.substring(1,4);
	
	


	floorSVG=floorID.getAttribute("id") + '_svg' ;
	
//alert(floorSVG);

  
 // alert(String(floorID));
				 var position = (($(floorID).offset().top) -120);
					$('html, body').animate({ scrollTop: position }, 500);
					setTimeout(function(){
					if(floorID.getAttribute("id")!='floorG'){
						openIt(floorID);
						}
					}, 700);
  };
	openIt = function(floor){
	$('#accordion1').on('show.bs.collapse', function () {
    $('#accordion1 .in').collapse('hide');
});
	$(floor).collapse('show');
	
	}
	hideIt = function(){
		//$('#accordion1 .in').collapse('hide');
	
	
	}
	
		setTimeout(function(){
						getGalXY(floorSVG,gallery);
					}, 1800); 

	
	$('.eHeight').each(function () {
  var eHeight = $(this).parent().innerHeight();
  
  $(this).outerHeight(eHeight);
  
 
});

$('.carousel-control').mouseup(function (e) {
   

});




});

