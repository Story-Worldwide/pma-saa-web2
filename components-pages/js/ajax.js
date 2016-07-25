<!--
// declare global variable
var xmlHttp;

// create Xml over Http Object
function GetXmlHttpObject(handler) { 
	var objXmlHttp = null;
	if (navigator.userAgent.indexOf("MSIE") >= 0) { 
		var strName = "Msxml2.XMLHTTP";
		try { 
			objXmlHttp = new ActiveXObject(strName);
			objXmlHttp.onreadystatechange = handler; 
		} catch(e) { 
			try {
				strName = "Microsoft.XMLHTTP";
				objXmlHttp = new ActiveXObject(strName);
				objXmlHttp.onreadystatechange = handler; 
			} catch(e2) {
				objXmlHttp = false; 
			}
		}
	} else if (typeof XMLHttpRequest != "undefined") {
		// mozilla-based browser
		objXmlHttp = new XMLHttpRequest();
		objXmlHttp.onload = handler;
		objXmlHttp.onerror = handler; 
	} else {
		objXmlHttp = false;
	}	
	return objXmlHttp;
}

// ready state for social tagging
function folkStateChanged() { 
	// verify xmlHttp object exists
	if (xmlHttp) {
		// check readyState; don't do a damn thing until readyState is 4 or complete
		if ((xmlHttp.readyState == 4) || (xmlHttp.readyState == "complete")) { 
			// display thank you message
			document.getElementById("folksonomy").innerHTML = xmlHttp.responseText;
		}
	}
}

// update data via XML over HTTP asynchronously for my community forums
function addFolkData() {
	var formObj = document.forms["form2"];
	var id = formObj.elements["ObjectID"].value;
	var userInput = formObj.elements["req_userInput"].value;
	if ((userInput.indexOf("http://") < 0) && (id.length > 0) && (userInput.length > 0) && (GetXmlHttpObject(folkStateChanged))) { 
		// get new data
		var url = "/collections/folksonomy_ajax.php?ObjectID=" + id + "&req_userInput=" + userInput;
		xmlHttp = GetXmlHttpObject(folkStateChanged); 
		xmlHttp.open("GET", url, true); 
		xmlHttp.send(null);
	} else {
		if (userInput.indexOf("http://") >= 0) {
			alert("Please do not enter URLs.");
			formObj.elements["req_userInput"].select();
		} else {
			alert("Please enter a tag.");
			formObj.elements["req_userInput"].focus();
		}
		return false;
	}
}

function delFolkData(tagID, objID) {
	var formObj = document.forms["form2"];
	var id = formObj.elements["ObjectID"].value;
	if ((id.length > 0) && (GetXmlHttpObject(folkStateChanged))) { 
		if (confirm("Are you sure you want to delete this?")) {
			// get new data
			var url = "/collections/folksonomy_ajax.php?tagID=" + tagID + "&objID=" + objID;
			xmlHttp = GetXmlHttpObject(folkStateChanged); 
			xmlHttp.open("GET", url, true); 
			xmlHttp.send(null);
		}
	}
}

// ready state for forum
var curRead = null;
function forumStateChanged() { 
	// verify xmlHttp object exists
	if (xmlHttp) {
		// check readyState; don't do a damn thing until readyState is 4 or complete
		if ((xmlHttp.readyState == 4) || (xmlHttp.readyState == "complete")) { 
			// no longer display read div
			document.getElementById(curRead).style.display = "none";
			curRead = null;
		}
	}
}

// update data via XML over HTTP asynchronously for my community forums
function updateForumData(id) {
	id = id.toString();
	if ((id.length > 0) && (GetXmlHttpObject(forumStateChanged))) { 
		// get new data
		curRead = "read" + id;
		var url = "forums_ajax.php?id=" + id;
		xmlHttp = GetXmlHttpObject(forumStateChanged); 
		xmlHttp.open("GET", url, true); 
		xmlHttp.send(null);
	}	
}

// checks ready state for suggestions
function stateChanged() { 
	// verify xmlHttp object exists
	if (xmlHttp) {
		// check readyState; don't do a damn thing until readyState is 4 or complete
		if ((xmlHttp.readyState == 4) || (xmlHttp.readyState == "complete")) {
			// write out dhtml content
			document.getElementById("suggestions").innerHTML = xmlHttp.responseText; 
			// check data length to determine display options
			if ((xmlHttp.responseText.length > 0) && (document.forms[0].elements["bSuggest"].value == 1)) {
				// highlight the first item for new data set 
				mouseHighlight(0);
				// display suggestions
				document.getElementById("suggestions").style.display = "";
			} else {
				// hide suggestions
				document.getElementById("suggestions").style.display = "none"; 
			}
		}
	}
}

// for drop down menu of artist/maker names
function letterStateChanged() { 
	// verify xmlHttp object exists
	if (xmlHttp) {
		// check readyState; don't do a damn thing until readyState is 4 or complete
		if ((xmlHttp.readyState == 4) || (xmlHttp.readyState == "complete")) { 
			// write out dhtml content
			document.getElementById("artistMaker").innerHTML = xmlHttp.responseText; 
		}
	}
}

// for adding exhbitions to My Calendar
var curExDiv = null;
function myCalStateChanged() { 
	// verify xmlHttp object exists
	if (xmlHttp) {
		// check readyState; don't do a damn thing until readyState is 4 or complete
		if ((xmlHttp.readyState == 4) || (xmlHttp.readyState == "complete")) { 
			// write out dhtml content
			if (curExDiv != null) {
				document.getElementById(curExDiv).innerHTML = "[<span class='note'><a href='/myMuseum/mycalendar.html'>Saved</a></span>]"; 
				curExDiv = null;
			}
			document.getElementById("verify").innerHTML = xmlHttp.responseText; 
		}
	}
}

// get data via XML over HTTP asynchronously for suggestions
function getData(obj, e) {
	var code = null;
	if (e != null) {
		// set code variable
		code = getKeyCode(e);
	}
	if ((code == 38) || (code == 40)) {
		// highlight only; do not get data
		keyHighlight(e);
	} else if ((obj.value.length > 0) && (GetXmlHttpObject(stateChanged))) { 
		// get new data
		var url = "getSuggestions.php?searchTxt=" + obj.value;
		xmlHttp = GetXmlHttpObject(stateChanged); 
		xmlHttp.open("GET", url, true); 
		xmlHttp.send(null);
	} else { 
		// hide suggestions
		document.getElementById("suggestions").innerHTML = ""; 
		document.getElementById("suggestions").style.display = "none";
	} 
	
}

// get data via XML over HTTP asynchronously for arist/maker drop-down menu
function getLetterData(letterVal) {
	if ((letterVal.length > 0) && (GetXmlHttpObject(letterStateChanged))) {
		// get new data
		var url = "getArtistMaker.php?letter=" + letterVal;
		xmlHttp = GetXmlHttpObject(letterStateChanged);
		xmlHttp.open("GET", url, true); 
		xmlHttp.send(null);
	}	
}

// add data via XML over HTTP asynchronously for my calendar
function addToCalendar(exID) {
	if ((exID > 0) && (GetXmlHttpObject(myCalStateChanged))) {
		// get new data
		curExDiv = "exDiv_" + exID;
		var url = "addToCalendar.php?exID=" + exID;
		xmlHttp = GetXmlHttpObject(myCalStateChanged); 
		xmlHttp.open("GET", url, true); 
		xmlHttp.send(null);
	}	
}

// replace searchTxt value with suggestion
function replaceKeywords(str) {
	// strip slashes
	if (str != null) {
		if (str.indexOf("\\") >= 0) {
			// remove slashes
			str.replace("\\", "");
		}
	}
	if (str != null) {
		document.forms[0].elements["searchTxt"].value = str;
	} else if ((document.getElementById("opt" + curSelected)) || (curSelected == 0)) {
		document.forms[0].elements["searchTxt"].value = document.getElementById("opt" + curSelected).innerHTML;
	}
	if (document.getElementById("suggestions").style.display != "none") {
		// hide suggestions
		document.getElementById("suggestions").style.display = "none";
		// submit form
		document.forms[0].submit();
	}
}

// replace searchTxt value with selected by ENTER key
function keySelect(e) {
	var code = getKeyCode(e);
	if (code == 13) {
		replaceKeywords(null);	
	}
}

// hide suggestions
function hideSuggestions() {
	document.getElementById("suggestions").style.display = "none";
}

// no suggestions
function toggleSuggestions() {
	if (document.forms[0].elements["bSuggest"].value == 1) {
		document.getElementById("optionsTxt").innerHTML = " [ <a href=\"javascript:toggleSuggestions();\">Hints Off</a> ] ";
		hideSuggestions();
		document.forms[0].elements["bSuggest"].value = 0;
	} else {
		document.getElementById("optionsTxt").innerHTML = " [ <a href=\"javascript:toggleSuggestions();\">Hints On</a> ] ";
		getData(document.forms[0].elements["searchTxt"]);
		document.forms[0].elements["bSuggest"].value = 1;
	}
}

// global variables to track highlighted options
var curSelected = 0;
var firstTime = 0;
var maxRecs = 7;
var numRecs = 0

function mouseDeselect() {
	if (((curSelected != 0) || (curSelected != maxRecs)) && (document.getElementById("opt" + curSelected))) {
		prevObj = document.getElementById("opt" + curSelected).style;
		curObj = null;
		// swap highlighted background colors
		changeBG(prevObj, curObj);
	}
}

function mouseHighlight(num) {
	// set objects
	if (num > 0) {
		var prevObj = null;
		var curObj = document.getElementById("opt" + num).style;
		if (document.getElementById("opt" + curSelected)) {
			prevObj = document.getElementById("opt" + curSelected).style;
		} else {
			prevObj = null;
		}
		if (prevObj == curObj) {
			prevObj = null;
		}
		// swap highlighted background colors
		changeBG(prevObj, curObj);
	}
	// reset currently selected variable
	curSelected = num;
	// set firstTime flag if user has not already done so
	firstTime = 1;
}

function getKeyCode(e) {
	var code = null;
	if (!e) {
		var e = window.event;
	}
	if (e.keyCode) { 
		code = e.keyCode;
	} else if (e.charCode) { 
		code = e.charCode;
	}	
	return code;
}

function keyHighlight(e) {
	// update maxRecs global variable
	getMax();
	// get keycode
	var code = getKeyCode(e);
	// set variables
	var cur = curSelected;
	var curObj = "";
	var prevObj = "";
	// check key codes
	if (code == 38) {
		// up arrow key
		if (curSelected > maxRecs) {
			curSelected = maxRecs;
			cur = curSelected;
		} else {
			cur = curSelected - 1;
		}
		if (cur < 0) {
			cur = 0;
		}
		if (cur == maxRecs) {
			// deselect previous item
			prevObj = null;
			// select current item
			curObj = document.getElementById("opt" + cur).style;	
		} else if (cur > 0) {
			// deselect previous item
			if (document.getElementById("opt" + curSelected)) {
				prevObj = document.getElementById("opt" + curSelected).style;
			}
			// select current item
			curObj = document.getElementById("opt" + cur).style;
		} else {
			// deselect previous item
			if (curSelected > 0) {
				prevObj = document.getElementById("opt" + curSelected).style;
			} else {
				prevObj = document.getElementById("opt1").style;
			}
			curObj = document.getElementById("opt1").style;
			// select current item
			if (prevObj == curObj) {
				curObj = null;
			}
		}
	} else if (code == 40) {
		// down arrow key
		cur = curSelected + 1;
		if (document.getElementById("opt" + cur)) {
			// deselect previous item
			if (curSelected > 0) {
				prevObj = document.getElementById("opt" + curSelected).style;
			} else {
				if ((document.getElementById("opt" + maxRecs)) && (maxRecs != 1)) {
					prevObj = document.getElementById("opt" + maxRecs).style; 	
				} else {
					prevObj = null;
				}
			}
			// select current item
			curObj = document.getElementById("opt" + cur).style;
			if (prevObj == curObj) {
				curObj = null;
			}
		} else {
			cur--;
			// deselect previous item
			if (document.getElementById("opt" + cur)) {
				prevObj = document.getElementById("opt" + cur).style;
				// select current item
				curObj = null;
				cur++;
			}
		}
	} else {
		if (firstTime == 0) {
			prevObj = null;
			curObj = null;
		}
	}
	// swap colors for highlighted text
	if ((code == 40) || (code == 38)) {
		changeBG(prevObj, curObj);
		curSelected = cur;
	}
	// set firstTime flag
	firstTime = 1;
	// check for idiot safari which can't discern keyup from keydown events
	if (navigator.userAgent.indexOf("MSIE") < 0) {
		e.stopPropagation();
	}
}

function changeBG(prevObj, curObj) {
	// set colors
	if (navigator.userAgent.indexOf("MSIE") < 0) {
		if (prevObj != null) {
			prevObj.backgroundColor = "rgb(255,255,255)";
			prevObj.color = "rgb(76,76,76)";
		}
		if (curObj) {
			curObj.backgroundColor = "rgb(0,0,102)";
			curObj.color = "rgb(255,255,255)";
		}
	} else {
		if (prevObj != null) {
			prevObj.backgroundColor = "#FFFFFF";
			prevObj.color = "#4c4c4c";
		}
		if (curObj) {
			curObj.backgroundColor = "#000066";
			curObj.color = "#FFFFFF";	
		}
	}
}

function getMax() {
	// declare variables
	var counter = 1;
	var divObj = document.getElementById("opt" + counter);
	do {
		// increment counter and reset divObj
		counter++;
		divObj = document.getElementById("opt" + counter);	
	} while (divObj);
	// reset max records variable
	maxRecs = counter - 1;
}

// ready state for object liking
function objVoteChanged() { 
	// verify xmlHttp object exists
	if (xmlHttp) {
		// check readyState; don't do a damn thing until readyState is 4 or complete
		if ((xmlHttp.readyState == 4) || (xmlHttp.readyState == "complete")) { 
			// display thank you message
			document.getElementById("votes").innerHTML = xmlHttp.responseText;
			

		}
	}
}

// update data via XML over HTTP asynchronously for object liking
function addObjVote() {
document.getElementById("myButton").style.display ="none";
	var formObj = document.forms["voteForm"];
	var objectid = formObj.elements["objectid"].value;
	var objvoterid = formObj.elements["objvoterid"].value;
	
	
		ga('send','event','Liked It', 'object liked', objectid);
	
	
    if(objectid > 0  && GetXmlHttpObject(objVoteChanged)){
		// get new data
		var url = "/collections/objectVote_ajax.php?objectid=" + objectid + "&objvoterid=" + objvoterid;
		xmlHttp = GetXmlHttpObject(objVoteChanged); 
		xmlHttp.open("GET", url, true); 
		xmlHttp.send(null);
	} else {
    return false;
    }
}

//-->