function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

// alert
function alertMe(stuff) {
	alert(stuff);
}

// check search engine input
function checkInput() {
	var obj = document.forms[0].elements["searchTxt"];
	// any non-alphanumeric characters
	var junk = /\W/;
	// any alphanumeric characters
	var good = /\w/;
	// if submitted text contains alphanumeric characters, let them search
	if (good.test(obj.value)) {
		return true;
	// if input is a series of non-alphanumeric characters, stop them
	} else if (junk.test(obj.value)) {
		alert("Please search for a word or phrase.");
		obj.select();
		return false;
	} else {
		resetValues();
	}
}

var popUpWin=0;
function popUpWindow(URLStr, left, top, width, height, scrollbars) {
  if(popUpWin)   {
    if(!popUpWin.closed) popUpWin.close();
  }
  popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars='+scrollbars+',resizable=yes,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');
}

var newWin=0;
function newWindow(URLStr) {
  
  newWin = window.open(URLStr);
}

// leaving popUp
var leavingWin = 0;
function leavingWindow(goURL) {
  if(leavingWin)   {
    if(!leavingWin.closed) leavingWin.close();
  }
  leavingWin = open('/includes/leaving.php?go='+goURL, 'leavingWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=yes,width=300,height=200,left=0, top=0,screenX=0,screenY=0');
}

// click Trax
var clickWin=0;
function clickTrax(goURL) {
	newWin = window.open('/includes/clickTrax.php?goto='+goURL);
	
}

// form validation
function validate() {
	var formObj = document.forms[0].elements;
	var curElem = null;
	var bReturn = true;
	for (var i=0; i<formObj.length; i++) {
		curElem = formObj[i];
		// is this element a required field
		if (curElem.name.indexOf("req_") >= 0) {
			// is this element a text field
			if (curElem.type.indexOf("text") >= 0) {
				// make sure there is a value entered
				if (curElem.value.length <= 0) {
					alert("Please enter a value.");
					curElem.focus();
					bReturn = false;
					return false;
				} 
				if (curElem.name.indexOf("email") > 0) {
					var goodEmail = validEmail(curElem);	
					if (goodEmail != true) {
						curElem.focus();
						bReturn = false;
						return false;
					}
				}
			}
			if (curElem.type.indexOf("select") >= 0) {
				// make sure there is an option selected
				if ((curElem.value == "") || (curElem.value == null)) {
					alert("Please select an option.");
					curElem.focus();
					bReturn = false;
					return false;
				}
			}
			if (curElem.type.indexOf("file") >= 0) {
				// make sure there is an option selected
				if ((curElem.value == "") || (curElem.value == null)) {
					alert("Please select a file to upload.");
					curElem.focus();
					bReturn = false;
					return false;
				}
			}
			if (curElem.type.indexOf("pass") >= 0) {
				// make sure there is an option selected
				if ((curElem.value == "") || (curElem.value == null)) {
					alert("Please enter a password.");
					curElem.focus();
					bReturn = false;
					return false;
				}
			}
			if (curElem.type.indexOf("check") >= 0) {
				// make sure there is an option selected
				if (!curElem.checked) {
					alert("Please check an option.");
					curElem.focus();
					bReturn = false;
					return false;
				}
			}
		}
	}
	if (bReturn) {
		return true;
	}
}

function checkPasswords(elem1, elem2) {
	var obj1 = document.forms[0].elements[elem1];
	if (obj1.value != elem2.value) {
		alert("Your passwords do not match. Please re-type your passwords.");
		elem2.value = "";
		obj1.select();
	}
}

function checkDate() {
	var mon = document.forms[0].elements["req_month"];
	var day = document.forms[0].elements["req_day"];
	var yr = document.forms[0].elements["req_yr"];
	var bValid = false;
	if ((mon.value.length == 2) && (mon.value != "00") && (day.value.length == 2) && (day.value != "00") && (yr.value.length == 4) && (yr.value != "0000")) {
		bValid = true;
	}
	var newDate = new Date(mon.value + "/" + day.value + "/" + yr.value);
	if ((!newDate) || (!bValid)) {
		alert("Please enter a valid date using the MM/DD/YYYY format.");
	}
}

// checks for leap year
function checkLeapYear(inYear) {
// Rules for calculating leap year
// 1. Every year evenly divisible by 4 is PROBABLY a leap year.
// 2. The exception to rule #1 is that every year evenly divisible by 100 is NOT a leap year. 
// 3. The exception to rule #2 is that every year evenly divisible by 100 that is also evenly divisible by 400 IS a leap year.
	if (inYear % 4 == 0) {
		if (inYear % 100 == 0) {
			return (inYear % 400 == 0);
		} else {
			return true;
		}
	} else {
		return false;
	}
}

// set days after user picks year
function validateDays(elemObj, selectName, yr) {
	var allDays = new Array(null,31,28,31,30,31,30,31,31,30,31,30,31);
	if (checkLeapYear(yr)) {
		allDays[2] = 29;
	}
	var index = elemObj.value;
	var formObj = document.forms[0].elements[selectName];
	var curEnd = allDays[index];
	var prevSelected = formObj.options.selectedIndex;
	formObj.length = 1;
	for (var i=1; i<=curEnd; i++) {
		formObj.options[i] = new Option(i, i);
	}
	if (formObj.options[prevSelected] != null) {
		formObj.options[prevSelected].selected = true;
	} else {
		formObj.options[allDays[index]].selected = true;
	}
}

// make sure start time is not greater than end time
function checkTime(elemName) {
	// set variables
	var fo = document.forms[0].elements;
	var someDate = "January 1, 2000 ";
	var sMer = fo[elemName+"_mer_from"].options[fo[elemName+"_mer_from"].options.selectedIndex].value;
	var eMer = fo[elemName+"_mer_to"].options[fo[elemName+"_mer_to"].options.selectedIndex].value;
	var sHr = "";
	var eHr = "";
	var eMin = "";
	var sMin = "";
	if ((sMer != "") && (eMer != "")) {
		if (sMer == "AM") {
			sHr = fo[elemName+"_hr_from"].options[fo[elemName+"_hr_from"].options.selectedIndex].value;
		} else if ((sMer == "PM") && (fo[elemName+"_hr_from"].options[fo[elemName+"_hr_from"].options.selectedIndex].value < 12)) {
			sHr = ((fo[elemName+"_hr_from"].options[fo[elemName+"_hr_from"].options.selectedIndex].value-0) + 12);
		} else {
			sHr = 12;
		}
		if (eMer == "AM") {
			eHr = fo[elemName+"_hr_to"].options[fo[elemName+"_hr_to"].options.selectedIndex].value;
		} else if ((eMer == "PM") && (fo[elemName+"_hr_to"].options[fo[elemName+"_hr_to"].options.selectedIndex].value < 12)) {
			eHr = ((fo[elemName+"_hr_to"].options[fo[elemName+"_hr_to"].options.selectedIndex].value-0) + 12);
		} else {
			eHr = 12;
		}
		sMin = fo[elemName+"_min_from"].options[fo[elemName+"_min_from"].options.selectedIndex].value;
		eMin = fo[elemName+"_min_to"].options[fo[elemName+"_min_to"].options.selectedIndex].value;
		if ((eHr != "") && (eMin != "") && (sHr != "") && (sMin != "")) {
			if ((eHr == 12) && (eMer == "AM")) {
				// allow midnight to be the last time of the current day
			} else {
				var sTime = new Date(someDate + sHr + ":" + sMin + ":00");
				var eTime = new Date(someDate + eHr + ":" + eMin + ":00");
				if (sTime >= eTime) {
					alert("The start time time must be less than the end time.");
					return false;
				}
			}
		}
		return true;
	}
}

// check for optional billing info and donation amount for donate online form
function setAmount(obj) {
	var formObj = document.forms[0].elements;
	formObj["amount"].value = obj.value;
}
function checkDonate() {
	var formObj = document.forms[0].elements;
	// check donation amount
	if ((formObj["amount"].value.length == 0) && (formObj["other_amount"].value.length == 0)) {
		alert("You must either choose or enter an amount to donate.");
		location = "#gift";
		return false;
	}
	// check all required fields
	var checkReq = validate();
	if (!checkReq) {
		return false;
	}
	// check credit cards
	if ((formObj["req_cards"].value == "American Express") && ((formObj["req_cardNumber"].value.length != 15) || (isNaN(formObj["req_cardNumber"].value)))) {
		alert("Please supply either a 15-digit numeric number without spaces or dashes.");
		formObj["req_cardNumber"].focus();
		formObj["req_cardNumber"].select();
		return false;
	} else if ((formObj["req_cards"].value != "American Express") && ((formObj["req_cardNumber"].value.length != 16) || (isNaN(formObj["req_cardNumber"].value)))) {
		alert("Please supply either a 16-digit numeric number without spaces or dashes.");
		formObj["req_cardNumber"].focus();
		formObj["req_cardNumber"].select();
		return false;
	}
	// check for billing information
	if ((!formObj["bill_info"].checked) && ((formObj["bill_address"].value.length <= 0) || (formObj["bill_city"].value.length <= 0) || (formObj["bill_state"].value.length <= 0) || (formObj["bill_zip"].value.length <= 0) || (formObj["bill_country"].value.length <= 0))) {
		alert("You must either check the billing checkbox or enter different billing information.");
		return false;
	}	
	// check for tribute information
	if ((formObj["on_behalf"].value.length > 0) || (formObj["on_behalf_of"].value.length > 0) || (formObj["ack_name"].value.length > 0) || (formObj["ack_address"].value.length > 0) || (formObj["ack_email"].value.length > 0)) {
		if ((formObj["on_behalf"].value.length <= 0) || (formObj["on_behalf_of"].value.length <= 0) || (formObj["ack_name"].value.length <= 0) || (formObj["ack_address"].value.length <= 0) || (formObj["ack_email"].value.length <= 0)) {
			alert("You must either complete all the fields under the Tribute & Acknowledgement section or leave them all blank.");
			formObj["on_behalf_of"].focus();
			return false;	
		}
	}
	// check for valid acknowledgment e-mail
	if ((formObj["ack_email"].value.length > 0) && (!validEmail(formObj["ack_email"]))) {
		formObj["ack_email"].focus();
		formObj["ack_email"].select();
		return false;
	}
	return true;
}

// assign content to nav section
function getContent(section, url) {
	var newURL = location.href.substring(0,location.href.indexOf("/")+1);
	newURL = "/" + section + "/" + url + ".html";
	location = newURL;
}

// pull content into any section
function pullContent(id) {
	var newURL = location.href.substring(location.href.indexOf("/"), location.href.lastIndexOf("-"));
	newURL = newURL + "-" + id + ".html"
	location = newURL;
}

// pull content into any nav item
// pass navID, articleID
function pullContentNav(navID, arID) {
	var newURL = "";
	var hyphen = false;
	if (location.href.indexOf("-") >= 0) {
		newURL = location.href.substring(0, location.href.lastIndexOf("-"));
		hyphen = true;
	} else {
		newURL = location.href.substring(0, location.href.lastIndexOf("/")+1);
	}
	if (newURL.indexOf("-") >= 0) {
		newURL = newURL.substring(0, newURL.lastIndexOf("-"))
	}
	if (hyphen) {
		newURL = newURL + "-" + navID + "-" + arID + ".html";
	} else {
		newURL = newURL + navID + "-" + arID + ".html";	
	}
	location = newURL;
}

// display short description in Museum Calendar and Jobs sections
function displayShort(id) {
	var obj = document.getElementById(id);
	if (obj.style.display == "none") {
		obj.style.display = "";
	} else {
		obj.style.display = "none";
	}
}

// display children in My Museum forums
function displayChildren(id) {
	var obj = document.getElementById("child"+id);
	if (obj.style.display == "none") {
		obj.style.display = "";
		document["opener"+id].src = "/images/forum/close.gif";
	} else {
		obj.style.display = "none";
		document["opener"+id].src = "/images/forum/open.gif";
	}
}

// sets category flag on search results page
function setCat(cat) {
	document.forms[0].elements["prevCat"].value = document.forms[0].elements["cat"].value;
	document.forms[0].elements["cat"].value = cat;
	document.forms[0].elements["manyCats"].value = false;
	document.forms[0].submit();
}

// sets page numbers for search results page
function setPage(num) {
	var obj = document.forms[0].elements["page"];
	obj.value = num;
	document.forms[0].submit();
}

// resets form default values
function resetValues() {
	if (document.forms[0].elements["cat"]) {
		//document.forms[0].elements["cat"].value = document.forms[0].elements["prevCat"].value;
		getCats();
		document.forms[0].elements["manyCats"].value = true;
		document.forms[0].elements["prevCat"].value = "";
	}
	document.forms[0].elements["page"].value = 1;
}

// return to original categorized results
function returnToResults() {
	// resets form default values
	resetValues();
	document.forms[0].submit();
}

// for collections search
function setPageLetter(str) {
	document.forms[1].elements["letter"].value = str;
	document.forms[1].elements["searchTxt"].value = document.forms[0].elements["searchTxt"].value;
	if (document.forms[1].elements["searchProvenance"].checked) {
		document.forms[1].elements["searchProvenance"].value = document.forms[0].elements["provenance"].value;
	}
	document.forms[1].elements["origin"].value = document.forms[0].elements["searchOrigin"].value;
	document.forms[1].elements["classID"].value = document.forms[0].elements["searchClassID"].value;
	document.forms[1].submit();
}
// set provenance flag
function setProvenance(obj) {
	var formObj = document.forms[1].elements["searchProvenance"];
	formObj.value = obj.value;
	document.forms[1].elements["searchTxt"].value = document.forms[0].elements["searchTxt"].value;
}
// set flag to keep advanced options visible to user
/* function showOptions(fieldName) {
	displayShort(fieldName);
	var formObj = document.forms[1].elements["searchOptions"];
	if (formObj.value == 1) {
		formObj.value = 0;
	} else {
		formObj.value = 1;
	}
} */
// disable all other form fields if searching by accession id
function disableFields() {
	var formObj = document.forms[0].elements;
	var toggle = "Off";
	// check if suggestions are on or off
	if (formObj["bSuggest"].value == 1) {
		toggle = "On";
	}
	if ((formObj["accessionID"].value.length == 0) && (formObj["searchTxt"].value.length > 0)) {
		// disable accession id field and buttons
		formObj["searchTxt"].disabled = false;
		formObj["keySearch"].disabled = false;
		formObj["keyReset"].disabled = false;
		formObj["accessionID"].disabled = true;
		formObj["accSearch"].disabled = true;
		formObj["accReset"].disabled = true;
	} else if ((formObj["accessionID"].value.length > 0) && (formObj["searchTxt"].value.length == 0)) {
		// disable keywords field, options, and buttons
		document.getElementById("optionsTxt").innerHTML = "[ Typing Accented Characters ]";
		formObj["searchTxt"].disabled = true;
		formObj["keySearch"].disabled = true;
		formObj["keyReset"].disabled = true;
		formObj["accessionID"].disabled = false;
		formObj["accSearch"].disabled = false;
		formObj["accReset"].disabled = false;
	} else {
		// enable all fields and search options
				document.getElementById("optionsTxt").innerHTML = " [ <a href=\"javascript:toggleSuggestions();\">Hints " + toggle + "</a> ] ";

		formObj["searchTxt"].disabled = false;
		formObj["keySearch"].disabled = false;
		formObj["keyReset"].disabled = false;
		formObj["accessionID"].disabled = false;
		formObj["accSearch"].disabled = false;
		formObj["accReset"].disabled = false;
	}
}

// for login page : reset password
function setSubmitted() {
	document.forms[0].elements["isSubmitted"].value = 1;
}




// set comparison gallery item ids : my gallery
function setCompare() {
	var formObj1 = document.forms[0].elements;
	var formObj2 = document.forms[1].elements;
	var allChecks = new Array();
	var maxNum = 2;
	// loop through check boxes and get checked
	for (var i=0; i<formObj1.length; i++) {
		var cur = formObj1[i];
		if (allChecks.length < maxNum) {
			if ((cur.type.indexOf("check") >= 0) && (cur.checked)) {
				allChecks[allChecks.length] = cur;
			}
		}
	}
	if (allChecks.length >= maxNum) {
		// disable other check boxes
		for (var j=0; j<formObj1.length; j++) {
			var curObj = formObj1[j];
			if ((curObj.type.indexOf("check") >= 0) && (curObj.checked != true)) {
				curObj.disabled = true;
			}
		}
		// set the second form to post for comparison
		formObj2["id1"].value = allChecks[0].value;
		formObj2["id2"].value = allChecks[1].value;
	} else {
		// enable all check boxes
		for (var j=0; j<formObj1.length; j++) {
			var curObj = formObj1[j];
			if (curObj.disabled == true) {
				curObj.disabled = false;
			}
		}
		// reset form to post for comparison
		formObj2["id1"].value = "";
		formObj2["id2"].value = "";
	}
}

// gallery compare function : my gallery
function compare() {
	var formObj = document.forms[1].elements;
	if ((formObj["id1"].value != "") && (formObj["id2"].value != "")) {
		// submit form
		document.forms[1].submit();
	} else {
		alert("You must choose 2 gallery items to compare by checking the checkboxes.");
		return false;
	}
}

// manage groups : my gallery
function setGroup() {
	document.getElementById("add_new").style.display = "";
	document.forms["controls"].elements["req_new_group"].value = document.forms["default"].elements["groups"].options[document.forms["default"].elements["groups"].selectedIndex].text;
	document.forms["controls"].elements["listingID"].value = document.forms["default"].elements["groups"].options[document.forms["default"].elements["groups"].selectedIndex].value;
	document.forms["controls"].elements["action"].value = "update";
}

function createGroup() {
	document.forms["controls"].elements["action"].value = "insert";
	document.forms["controls"].elements["req_new_group"].value = "";
	document.forms["controls"].elements["listingID"].value = "";
	displayShort("add_new");
}

function cancelGroup() {
	document.forms["controls"].elements["action"].value = "";
	document.getElementById("add_new").style.display = "none";
	document.forms["controls"].elements["req_new_group"].value = "";
	document.forms["controls"].elements["listingID"].value = "";
}

function deleteFromGroup(id) {
	var formObj = document.forms[0].elements;
	formObj["action"].value = "delete";
	if (id >= 0) {
		if (confirm("Are you sure that you wish to remove this item?")) {
			formObj["listingID"].value = id;
			document.forms["default"].submit();
			return true;
		} else {
			return false;
		}
	}
}

// set group name on share my gallery page
function setGroupName(obj) {
	document.forms["default"].elements["grpName"].value = obj.options[obj.selectedIndex].text;
}

// set little calendar view
function changeCal(divName) {
	displayShort(divName);
	if (document.images["calIcon"].src.indexOf("/images/interface/icons/day_icon.gif") >= 0) {
		document.forms[0].elements["opened"].value = 1;
		document.images["calIcon"].src = "/images/interface/icons/month_icon.gif";
	} else {
		document.forms[0].elements["opened"].value = 0;
		document.forms[0].elements["dayID"].value = "";
		document.forms[0].submit();
	}
}
//reset little calendar to all days
function resetCal() {
	document.forms[0].elements["dayID"].value = "";
	document.forms[0].submit();
}

// set user id in forum
function setUserID(obj, id) {
	var formObj = document.forms[0].elements;
	formObj["uID"].value = id;
	formObj["levelID"].value = obj.value;
	document.forms[0].submit();
}

function checkGallery() {
	var formObj = document.forms[0].elements;
	var selectValue = "";
	if (formObj["action"].value != "delete") {
		formObj["action"].value = "save";
		var count = 0;
		for (var i=0; i<formObj.length; i++) {
			var cur = formObj[i];
			if (cur.type.indexOf("check") >= 0) {
				if (cur.checked) {
					count++;
				}
			}
		}
		if (count == 0) {
			alert("You must select at least one item to save into a group.");
			return false;
		}
		if (formObj.elements["groups"].options[formObj.elements["groups"].selectedIndex].value == formObj.elements["save_group"].options[formObj.elements["save_group"].selectedIndex].value) {
			alert("The selected objects already belong to this group. Please select a different group.");
			return false;
		}
		return true;
	} else {
		formObj["action"].value = "save";
		return false;
	}
}

// collect all ids on image bank request page
function getIDs() {
	var formObj = document.forms[0].elements;
	var total = 0;
	for (var i=0; i<formObj.length; i++) {
		var cur = formObj[i];
		if ((cur.type.indexOf("check") >= 0) && (cur.checked)) {
			total++;
		}
	}
	if (total == 0) {
		// error: must select at least one image bank image
		alert("You must check at least one image from the image bank.");
		return false;
	} else {
		return validate();
	}
}

// store all search categories in one hidden form field
function getCats() {
	var formObj = document.forms[0].elements;
	var cats = "";
	var numChecked = 0;
	for (var i=0; i<formObj.length; i++) {
		if (formObj[i].checked) {
			numChecked++;
			cats += "," + formObj[i].value;	
		}
	}
	if (numChecked > 0) {
		cats = cats.substring(1, cats.length);
		formObj["cat"].value = cats;
	} else {
		alert("You must select at least one category to return results.");
		return false;
	}
}

// use js to dynamically write out all contact info so items can't be crawled by spiders
function displayContactInfo(input) {
	document.write("<a href='mailto:" + input + "@philamuseum.org'>" + input + "@philamuseum.org</a>");
}

// used to dynamically write out all contact info for the in gallery comments so they are not clickable
function displayContactInfoNoLink(input) {
	document.write(input + "@philamuseum.org");
}

// js bookmark function
function bookmark(url, title) {
	if ((window.external) && (navigator.userAgent.indexOf("MSIE") > 0)) {
		// ie 6.0+
		window.external.AddFavorite(url,title);
	} else if (window.sidebar) {
		// firefox
		window.sidebar.addPanel(title, url, "");
	}
}

// check request more information options : giving
function checkRequest() {
	var formObj = document.forms[0].elements;
	var maxBoxes = 4;
	var picked = false;
	for (var i=1; i<maxBoxes; i++) {
		if (formObj["brochure"+i].checked) {
			picked = true;
		}
	}
	var valid = validate();
	if (!valid) {
		return false;
	}
	if (!picked) {
		alert("You must choose at least one option.");
		formObj["brochure1"].focus();
		return false;
	}
	return true
}

// uncheck amount radio buttons and reset hidden amount field to nothing
function resetAmount() {
	var formObj = document.forms[0].elements;
	formObj["amount"].value = "";
	for(var i=0; i<formObj.length; i++) {
		var cur = formObj[i];
		if (cur.type.indexOf("radio") >= 0) {
			cur.checked = false;
		}
		// Hail Satan!
	}
}

// display 1 div and hide the rest
function showAndHide(divID, arrDiv, numTabs, tabIndex) {
	for(var i=0; i<arrDiv.length; i++) {
		var cur = arrDiv[i];
		if (cur == divID) {
			document.getElementById(cur).style.display = "";
		} else {
			document.getElementById(cur).style.display = "none";
		}
	}
	for (var j=numTabs; j>0; j--) {
		if (tabIndex == j) {
			document.images["left"+j].src = "/images/interface/tab_left_select.gif";
			document.images["right"+j].src = "/images/interface/tab_right_select.gif";
			document.getElementById("tab"+j).style.background = "url('/images/interface/tab_bg_select.gif')";
		} else {
			document.images["left"+j].src = "/images/interface/tab_left_out.gif";	
			document.images["right"+j].src = "/images/interface/tab_right_out.gif";	
			document.getElementById("tab"+j).style.background = "url('/images/interface/tab_bg_out.gif')";
		}
	}
}

// keep help menu open in My Museum
function setMenu(state) {
	document.forms[0].elements["menus"].value = state;
}

// verify that users selected at least one object to add to their My Gallery from collections results page
function checkForMyGallery() {
	var formObj = document.forms[0].elements;
	var count = 0;
	for (var i=0; i<formObj.length; i++) {
		var cur = formObj[i];
		// look for checkboxes
		if (cur.type.indexOf("check") >= 0) {
			if (cur.checked) {
				// google event tracking
				
					//pageTracker._trackEvent('My Gallery','Add to your Gallery - Muti Object',cur.value);
					ga('send', 'event', 'My Gallery','Add to your Gallery - Muti Object',cur.value);
				
				// increment counter for each object selected
				count++;
			}
		}
	}
	if (count == 0) {
		return false;
	} else {
		return true;
	}
}

// set action for collections search result
function setAction() {
	document.forms[0].elements["action"].value = "add";
	var check = false;
	check = checkForMyGallery();
	if (check) {
		document.forms[0].submit();
	} else {
		alert("You must select at least one object to add to your gallery.");
		return false;
	}
}

// add to gallery function : search the collections
function addToGallery(objNum) {
	
	// google track adding a object to my museum
	
		ga('send','event','My Gallery','Add to your Gallery - Single Object',objNum);
	
	document.forms[0].elements["galleryNum"].value = objNum;
	document.forms[0].submit();
}

function myGalleryAddObject(objNum){
	
	
}

// remove gallery item from my gallery
function deleteID(id) {
	var formObj = document.forms[0].elements;
	if (id >= 0) {
		if (confirm("Are you sure that you wish to remove this item?")) {
			formObj["listingID"].value = id;
			document.forms[0].submit();
			return true;
		} else {
			return false;
		}
	}
}

// set reminder toggle and id for my calendar
function setReminder(id, toggle) {
	var formObj = document.forms[0].elements;
	formObj["reminderID"].value = id;
	document.forms[0].submit();
}

// add to my calendar function
function addToMyCalendar(id, dt, tid) {
	document.forms[0].elements["evID"].value = id;
	document.forms[0].elements["evTypeID"].value = tid;
	document.forms[0].elements["evDate"].value = dt;
	document.forms[0].submit();
}

// check for basic e-mail address
function validEmail(obj) {
	if ((obj.value.indexOf(".") < 0) || (obj.value.indexOf("@") < 0)) {
		alert("Please enter a valid e-mail address.");
		return false;
	} else {
		return true;
	}
}

function previewForum(qString) {
	var formObj = document.forms[0].elements;
	if (formObj["req_respond"]) {
		if (formObj["req_respond"].options[formObj["req_respond"].options.selectedIndex].text == "Membership Department") {
			if (qString.length > 0) {
				qString += "&mvs=1";
			} else {
				qString += "?mvs=1";
			}
		}
	}
	popUpWindow('/myMuseum/forums/preview.php' + qString, 75, 75, 560, 300, 'no');	
}

// begin preview search result functions
var curPrevObj = null;
var xPos = 0;
var yPos = 0;
var ie = (navigator.userAgent.indexOf("MSIE") >= 0) ? true : false;
var safari = (navigator.userAgent.indexOf("Safari") >= 0) ? true : false;
var ff = (navigator.userAgent.indexOf("Firefox") >= 0) ? true : false;
function captureMousePos(e) {
	yPos = 0;
	xPos = 0;
	// check browser
	if (ie) {
		// internet exploder code goes here
		xPos = window.event.x;
		yPos = window.event.y + (document.documentElement.scrollTop - document.documentElement.offsetHeight);
	} else if ((ff) || (safari)) {
		// firefox and safari code goes here
		xPos = e.pageX;
		yPos = e.pageY;
	}
}

function showMore(rType, id, url, e) {
	// get mouse position
	captureMousePos(e);
	// variables
	var divName = "show_" + rType + id;
	// offsets and width of preview pane
	var xOffset = 2;
	var yOffset = 305;
	var w = 582;
	// need to create div on the fly
	var obj = document.createElement("DIV");
	// set attributes
	obj.setAttribute("id", divName);
	// check browser
	if (ie) {
		// internet exploder code goes here
		obj.style.position = "absolute";
		obj.style.top = (yPos + yOffset) + " px";
		obj.style.left = (xPos + xOffset) + " px";
		obj.style.width = w + " px";
	} else if ((ff) || (safari)) {
		// firefox and safari code goes here
		obj.setAttribute("class", "preview");
		obj.setAttribute("style", "position:absolute; top:" + (yPos - yOffset) + "px; left:" + (xPos + xOffset) + "px; width:" + w + "px;");
	}
	// set text
	obj.innerHTML = '<div class="preview"><table border="0" cellpadding="0" cellspacing="0" width="582"><tr><td colspan="3"><img src="/images/interface/roundFrame/preview_top.gif"/></td></tr>'
	+ '<tr><td background="/images/interface/roundFrame/preview_left.gif" width="6"><img src="/images/spacer.gif" width="6" height="1"/></td>'
	+ '<td width="570" bgcolor="#ffffff"><div style="overflow:hidden;"><iframe class="previewArea" src="' + url + '" width="570" height="400" frameborder="0" border="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0"></iframe></div></td>'
	+ '<td background="/images/interface/roundFrame/preview_right.gif" width="6"><img src="/images/spacer.gif" width="6" height="1"/></td></tr>'
	+ '<tr><td colspan="3"><img src="/images/interface/roundFrame/preview_bottom.gif"/></td></tr></table></div>';
	// set current object
	curPrevObj = obj;
	// append to body tag
	document.body.appendChild(obj);
}

// hide preview pane
function hideMore() {
	// check if object exists
	if (curPrevObj != null) {
		// destroy object
		document.body.removeChild(curPrevObj);
		// reset global object
		curPrevObj = null;
		xPos = 0;
		yPos = 0;
	}	
}
// end preview search result functions


// check if user entered only numbers for membership id
function checkMemNumber(obj) {
	if (isNaN(obj.value)) {
		alert("Please only use numbers when entering your Membership ID.");
	}
}




// temp multivids
var curVid = 1;
function showVid(num) {
	var obj = document.getElementById("vid" + num);
	var curObj = document.getElementById("vid" + curVid);
	if ((obj) && (curObj) && (num != curVid)) {
		// hide current Vid
		curObj.style.display = "none";	
		// show next Vid
		obj.style.display = "";	
		// reset curVid
		curVid = num;
		// remove focus from hyperlink click
		obj.blur();
	}
}

// google flash event tracking
function flashEvent(eventType,myEvent,myContent) {
	//pageTracker._trackEvent(eventType, myEvent, myContent);
	
		ga('send','event', eventType, myEvent, myContent);
	
} 

// google flash event tracking
function trackThisEvent(eventType,myEvent,myContent) {
	//pageTracker._trackEvent(eventType, myEvent, myContent);
		ga('send','event', eventType, myEvent, myContent);
	
} 


var keyStr = "ABCDEFGHIJKLMNOP" +
               "QRSTUVWXYZabcdef" +
               "ghijklmnopqrstuv" +
               "wxyz0123456789+/" +
               "=";

  function encode64(input) {
     input = escape(input);
     var output = "";
     var chr1, chr2, chr3 = "";
     var enc1, enc2, enc3, enc4 = "";
     var i = 0;

     do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
           enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
           enc4 = 64;
        }

        output = output +
           keyStr.charAt(enc1) +
           keyStr.charAt(enc2) +
           keyStr.charAt(enc3) +
           keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
     } while (i < input.length);

     return output;
  }

  function decode64(input) {
  
     var output = "";
     var chr1, chr2, chr3 = "";
     var enc1, enc2, enc3, enc4 = "";
     var i = 0;

     // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
     var base64test = /[^A-Za-z0-9\+\/\=]/g;
     if (base64test.exec(input)) {
        alert("There were invalid base64 characters in the input text.\n" +
              "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
              "Expect errors in decoding.");
     }
     input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

     do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
           output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
           output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

     } while (i < input.length);

     return unescape(output);
  }
// google download image event tracking
function trackThisSLX(myObject, myImage) {

	//alert("TRACK THIS " + decode64(myObject) + " " +  decode64(myImage) + ".jpg");
	
	
		ga('send','event', 'Object_Download', decode64(myObject), decode64(myImage));
	
} 
