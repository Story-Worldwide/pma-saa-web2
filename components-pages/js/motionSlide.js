var timerlen = 5;
var slideAniLen = 400;

var timerID = new Array();
var startTime = new Array();
var mediv = new Array();
var endHeight = new Array();
var moving = new Array();
var dir = new Array();
var isMoving = 0;
var lastDown = "";
var nextUp = "";
var objname = "";



function slidedown(objname){

		
        if(moving[objname])
                return;

        if(document.getElementById(objname).style.display != "none")
                return; // cannot slide down something that is already visible

        moving[objname] = true;
        dir[objname] = "down";
        startslide(objname);
		
}



function slideup(objname){
	
        if(moving[objname])
                return;

        if(document.getElementById(objname).style.display == "none")
                return; // cannot slide up something that is already hidden

        moving[objname] = true;
        dir[objname] = "up";
        startslide(objname);
		
		
		
		
}

function startslide(objname){
	isMoving=1;
        mediv[objname] = document.getElementById(objname);
        startTime[objname] = (new Date()).getTime();

        if(dir[objname] == "down"){
				
                mediv[objname].style.height = "1px";
        }

        mediv[objname].style.display = "block";

        timerID[objname] = setInterval('slidetick(\'' + objname + '\');',timerlen);
		endHeight[objname] = mediv[objname].scrollHeight;
		

}

function slidetick(objname){

        var elapsed = (new Date()).getTime() - startTime[objname];

        if (elapsed > slideAniLen)
                endSlide(objname)
        else {
                var d =Math.round(elapsed / slideAniLen * endHeight[objname]);
                if(dir[objname] == "up")
                        d = endHeight[objname] - d;

                mediv[objname].style.height = d + "px";
        }

        return;
}

function checkMore(){
	//alert("check more" + nextUp);
	if(nextUp!="" || nextUp!=lastDown ){
		slidedown(nextUp);
		$(nextUp).style.opacity = 0;
		$(nextUp).fade('in');
		lastDown=nextUp;
		 nextUp="";
	}
	
	if(toggle==1){
		slidedown(thisOne);
		toggle=0;
	}
}

function endSlide(objname){
		isMoving=0;
        clearInterval(timerID[objname]);

        if(dir[objname] == "up"){
           mediv[objname].style.display = "none";
		}
				
	mediv[objname].style.height = "auto";
        delete(moving[objname]);
        delete(timerID[objname]);
        delete(startTime[objname]);
        delete(endHeight[objname]);
        delete(mediv[objname]);
        delete(dir[objname]);
	
	checkMore();
        return;
}

function updateSmartView(setSmartView){
	var today = new Date();
	var expire = new Date();
	// set cookie expiration for up to 1 year
	expire.setTime(today.getTime() + 3600000*24*365);
	
	// store current font size in a cookie	
	document.cookie = "myObjectView=" + setSmartView + ";expires=" + expire.toGMTString() + ";path=/";
	
	
	
}


function toggleSlide(objname1,objname2){
	
	
	
	toggle=1;
	 
  if(document.getElementById(objname1).style.display == "none"){
	 thisOne = objname1;
	 nextone = objname2;
	 setSmartView = 1;
	 
  }else{

	  thisOne = objname2;
	 nextone = objname1;
	setSmartView = 2;
    
	
  }
  if(objname1=="recordDetail"){
		updateSmartView(setSmartView);
	}
  slideup(nextone);
  
}

