var Mediabox;!function(){function e(){B.setStyles({top:window.getScrollTop(),left:window.getScrollLeft()})}function o(){k=window.getWidth(),S=window.getHeight(),B.setStyles({width:k,height:S})}function t(t){Browser.Engine.gecko&&["object",window.ie?"select":"embed"].forEach(function(e){Array.forEach(document.getElementsByTagName(e),function(e){t&&(e._mediabox=e.style.visibility),e.style.visibility=t?"hidden":e._mediabox})}),B.style.display=t?"":"none";var i=t?"addEvent":"removeEvent";Q&&window[i]("scroll",e),window[i]("resize",o),d.keyboard&&document[i]("keydown",l)}function l(e){if(d.alpha)switch(e.code){case 27:case 88:case 67:p();break;case 37:case 80:i();break;case 39:case 78:a()}else switch(e.code){case 27:p();break;case 37:i();break;case 39:a()}if(d.stopKey)return!1}function i(){return r(u)}function a(){return r(g)}function r(e){return e>=0&&(I.set("html",""),f=e,u=(f||!d.loop?f:h.length)-1,g=f+1,g==h.length&&(g=d.loop?0:-1),m(),F.className="mbLoading",h[e][2]||(h[e][2]=""),H=h[e][2].split(" "),z=H.length,z>1?(O=H[z-2].match("%")?window.getWidth()*(.01*H[z-2].replace("%",""))+"px":H[z-2]+"px",R=H[z-1].match("%")?window.getHeight()*(.01*H[z-1].replace("%",""))+"px":H[z-1]+"px"):(O="",R=""),N=h[e][0],N=encodeURI(N).replace("(","%28").replace(")","%29"),P=h[f][1].split("::"),N.match(/quietube\.com/i)?($=N.split("v.php/"),N=$[1]):N.match(/\/\/yfrog/i)&&(K=N.substring(N.length-1),K.match(/b|g|j|p|t/i)&&(K="image"),"s"==K&&(K="flash"),K.match(/f|z/i)&&(K="video"),N+=":iphone"),N.match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)||"image"==K?(K="img",N=N.replace(/twitpic\.com/i,"twitpic.com/show/full"),j=new Image,j.onload=c,j.src=N):N.match(/\.flv|\.mp4/i)||"video"==K?(K="obj",O=O||d.defaultWidth,R=R||d.defaultHeight,j=d.useNB?new Swiff(""+d.playerpath+"?mediaURL="+N+"&allowSmoothing=true&autoPlay="+d.autoplay+"&buffer=6&showTimecode="+d.showTimecode+"&loop="+d.medialoop+"&controlColor="+d.controlColor+"&controlBackColor="+d.controlBackColor+"&defaultVolume="+d.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}):new Swiff(""+d.JWplayerpath+"?file="+N+"&backcolor="+d.backcolor+"&frontcolor="+d.frontcolor+"&lightcolor="+d.lightcolor+"&screencolor="+d.screencolor+"&autostart="+d.autoplay+"&controlbar="+d.controlbar,{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/\.mp3|\.aac|tweetmic\.com|tmic\.fm/i)||"audio"==K?(K="obj",O=O||d.defaultWidth,R=R||"20px",N.match(/tweetmic\.com|tmic\.fm/i)&&(N=N.split("/"),N[4]=N[4]||N[3],N="http://media4.fjarnet.net/tweet/tweetmicapp-"+N[4]+".mp3"),j=d.useNB?new Swiff(""+d.playerpath+"?mediaURL="+N+"&allowSmoothing=true&autoPlay="+d.autoplay+"&buffer=6&showTimecode="+d.showTimecode+"&loop="+d.medialoop+"&controlColor="+d.controlColor+"&controlBackColor="+d.controlBackColor+"&defaultVolume="+d.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}):new Swiff(""+d.JWplayerpath+"?file="+N+"&backcolor="+d.backcolor+"&frontcolor="+d.frontcolor+"&lightcolor="+d.lightcolor+"&screencolor="+d.screencolor+"&autostart="+d.autoplay,{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/\.swf/i)||"flash"==K?(K="obj",O=O||d.defaultWidth,R=R||d.defaultHeight,j=new Swiff(N,{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor}}),c()):N.match(/philamuseum\.org\/watch/i)?(X="true",K="obj",$=N.split("v="),$=$[1].split("&"),Y=$[0],O=O||d.defaultWidth,R=R||d.defaultHeight,pmaconfig="http://www.philamuseum.org/video/"+Y+".xml",j=new Swiff(""+d.JWplayerpath+"?config="+pmaconfig+"&backcolor="+d.backcolor+"&frontcolor="+d.frontcolor+"&lightcolor="+d.lightcolor+"&screencolor="+d.screencolor+"&autostart="+d.autoplay+"&abouttext="+d.abouttext+"&aboutlink="+d.aboutlink+"&logo.file="+d.logoFile+"&logo.hide="+d.logoHide+"&logo.link="+d.logoLink+"&plugins="+d.plugins+"&viral.email_footer="+d.viralEmail_footer+"&viral.oncomplete="+d.viralOncomplete+"&viral.onpause="+d.viralOnpause+"&gapro.accountid="+d.gaproAccountid+"&gapro.trackstarts="+d.gaproTrackstarts+"&gapro.trackpercentage="+d.gaproTrackpercentage+"&gapro.tracktime="+d.gaproTracktime,{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen,allownetworking:d.allownetworking}}),c()):N.match(/philamuseum\.org\/zoom/i)?(Z="true",K="obj",$=N.split("z="),$=$[1].split("&"),Y=$[0],O=O||d.defaultWidth,R=R||d.defaultHeight,this.closeModal="yes",j=new Swiff(""+d.PMAzoomerpath+"?assetName="+Y+"&backcolor="+d.backcolor+"&frontcolor="+d.frontcolor+"&lightcolor="+d.lightcolor+"&screencolor="+d.screencolor+"&autostart="+d.autoplay+"&closeModal="+this.closeModal,{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen,allownetworking:d.allownetworking,BASE:d.BASE}}),c()):N.match(/philamuseum\.org\/flipBook/i)?(ee="true",K="obj",$=N.split("fb="),$=$[1].split("&"),Y=$[0],O=O||d.defaultWidth,R=R||d.defaultHeight,this.closeModal="yes",this.showInfo="0",j=new Swiff(""+d.PMAflipbookpath+"?assetName="+Y+"&backcolor="+d.backcolor+"&frontcolor="+d.frontcolor+"&lightcolor="+d.lightcolor+"&screencolor="+d.screencolor+"&autostart="+d.autoplay+"&closeModal="+this.closeModal+"&showInfo="+this.showInfo,{id:"MediaboxSWF",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen,allownetworking:d.allownetworking,BASE:d.BASE}}),c()):N.match(/\.mov|\.m4v|\.m4a|\.aiff|\.avi|\.caf|\.dv|\.mid|\.m3u|\.mp3|\.mp2|\.mp4|\.qtz/i)||"qt"==K?(K="qt",O=O||d.defaultWidth,R=parseInt(R)+16+"px"||d.defaultHeight,j=new Quickie(N,{id:"MediaboxQT",width:O,height:R,container:"mbImage",attributes:{controller:d.controller,autoplay:d.autoplay,volume:d.volume,loop:d.medialoop,bgcolor:d.bgcolor}}),c()):N.match(/blip\.tv/i)?(K="obj",O=O||"640px",R=R||"390px",j=new Swiff(N,{src:N,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/break\.com/i)?(K="obj",O=O||"464px",R=R||"376px",Y=N.match(/\d{6}/g),j=new Swiff("http://embed.break.com/"+Y,{width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/dailymotion\.com/i)?(K="obj",O=O||"480px",R=R||"381px",j=new Swiff(N,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/facebook\.com/i)?(K="obj",O=O||"320px",R=R||"240px",$=N.split("v="),$=$[1].split("&"),Y=$[0],j=new Swiff("http://www.facebook.com/v/"+Y,{movie:"http://www.facebook.com/v/"+Y,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/flickr\.com/i)?(K="obj",O=O||"500px",R=R||"375px",$=N.split("/"),Y=$[5],j=new Swiff("http://www.flickr.com/apps/video/stewart.swf",{id:Y,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:O,height:R,params:{flashvars:"photo_id="+Y+"&amp;show_info_box="+d.flInfo,wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/gametrailers\.com/i)?(K="obj",O=O||"480px",R=R||"392px",Y=N.match(/\d{5}/g),j=new Swiff("http://www.gametrailers.com/remote_wrap.php?mid="+Y,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/google\.com\/videoplay/i)?(K="obj",O=O||"400px",R=R||"326px",$=N.split("="),Y=$[1],j=new Swiff("http://video.google.com/googleplayer.swf?docId="+Y+"&autoplay="+d.autoplayNum,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/megavideo\.com/i)?(K="obj",O=O||"640px",R=R||"360px",$=N.split("="),Y=$[1],j=new Swiff("http://wwwstatic.megavideo.com/mv_player.swf?v="+Y,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/metacafe\.com\/watch/i)?(K="obj",O=O||"400px",R=R||"345px",$=N.split("/"),Y=$[4],j=new Swiff("http://www.metacafe.com/fplayer/"+Y+"/.swf?playerVars=autoPlay="+d.autoplayYes,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/vids\.myspace\.com/i)?(K="obj",O=O||"425px",R=R||"360px",j=new Swiff(N,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/revver\.com/i)?(K="obj",O=O||"480px",R=R||"392px",$=N.split("/"),Y=$[4],j=new Swiff("http://flash.revver.com/player/1.0/player.swf?mediaId="+Y+"&affiliateId="+d.revverID+"&allowFullScreen="+d.revverFullscreen+"&autoStart="+d.autoplay+"&backColor=#"+d.revverBack+"&frontColor=#"+d.revverFront+"&gradColor=#"+d.revverGrad+"&shareUrl=revver",{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/rutube\.ru/i)?(K="obj",O=O||"470px",R=R||"353px",$=N.split("="),Y=$[1],j=new Swiff("http://video.rutube.ru/"+Y,{movie:"http://video.rutube.ru/"+Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/seesmic\.com/i)?(K="obj",O=O||"435px",R=R||"355px",$=N.split("/"),Y=$[5],j=new Swiff("http://seesmic.com/Standalone.swf?video="+Y,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/tudou\.com/i)?(K="obj",O=O||"400px",R=R||"340px",$=N.split("/"),Y=$[5],j=new Swiff("http://www.tudou.com/v/"+Y,{width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/twitcam\.com/i)?(K="obj",O=O||"320px",R=R||"265px",$=N.split("/"),Y=$[3],j=new Swiff("http://static.livestream.com/chromelessPlayer/wrappers/TwitcamPlayer.swf?hash="+Y,{width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/twiturm\.com/i)?(K="obj",O=O||"402px",R=R||"48px",$=N.split("/"),Y=$[3],j=new Swiff("http://twiturm.com/flash/twiturm_mp3.swf?playerID=0&sf="+Y,{width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/twitvid\.com/i)?(K="obj",O=O||"600px",R=R||"338px",$=N.split("/"),Y=$[3],j=new Swiff("http://www.twitvid.com/player/"+Y,{width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/ustream\.tv/i)?(K="obj",O=O||"400px",R=R||"326px",j=new Swiff(N+"&amp;viewcount="+d.usViewers+"&amp;autoplay="+d.autoplay,{width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/youku\.com/i)?(K="obj",O=O||"480px",R=R||"400px",$=N.split("id_"),Y=$[1],j=new Swiff("http://player.youku.com/player.php/sid/"+Y+"=/v.swf",{width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/youtube\.com\/watch/i)?($=N.split("v="),d.html5?(K="url",O=O||"640px",R=R||"385px",Y="mediaId_"+(new Date).getTime(),j=new Element("iframe",{src:"http://www.youtube.com/embed/"+$[1],id:Y,width:O,height:R,frameborder:0}),c()):(K="obj",Y=$[1],Y.match(/fmt=22/i)?(q="&ap=%2526fmt%3D22",O=O||"640px",R=R||"385px"):Y.match(/fmt=18/i)?(q="&ap=%2526fmt%3D18",O=O||"560px",R=R||"345px"):(q=d.ytQuality,O=O||"480px",R=R||"295px"),j=new Swiff("http://www.youtube.com/v/"+Y+"&autoplay="+d.autoplayNum+"&fs="+d.fullscreenNum+q+"&border="+d.ytBorder+"&color1=0x"+d.ytColor1+"&color2=0x"+d.ytColor2+"&rel="+d.ytRel+"&showinfo="+d.ytInfo+"&showsearch="+d.ytSearch,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c())):N.match(/youtube\.com\/view/i)?(K="obj",$=N.split("p="),Y=$[1],O=O||"480px",R=R||"385px",j=new Swiff("http://www.youtube.com/p/"+Y+"&autoplay="+d.autoplayNum+"&fs="+d.fullscreenNum+q+"&border="+d.ytBorder+"&color1=0x"+d.ytColor1+"&color2=0x"+d.ytColor2+"&rel="+d.ytRel+"&showinfo="+d.ytInfo+"&showsearch="+d.ytSearch,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/veoh\.com/i)?(K="obj",O=O||"410px",R=R||"341px",N=N.replace("%3D","/"),$=N.split("watch/"),Y=$[1],j=new Swiff("http://www.veoh.com/static/swf/webplayer/WebPlayer.swf?version=AFrontend.5.5.2.1001&permalinkId="+Y+"&player=videodetailsembedded&videoAutoPlay="+d.AutoplayNum+"&id=anonymous",{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/viddler\.com/i)?(K="obj",O=O||"437px",R=R||"370px",$=N.split("/"),Y=$[4],j=new Swiff(N,{id:"viddler_"+Y,movie:N,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen,id:"viddler_"+Y,movie:N}}),c()):N.match(/viddyou\.com/i)?(K="obj",O=O||"416px",R=R||"312px",$=N.split("="),Y=$[1],j=new Swiff("http://www.viddyou.com/get/v2_"+d.vuPlayer+"/"+Y+".swf",{id:Y,movie:"http://www.viddyou.com/get/v2_"+d.vuPlayer+"/"+Y+".swf",width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/vimeo\.com/i)?(O=O||"640px",R=R||"360px",$=N.split("/"),Y=$[3],d.html5?(K="url",Y="mediaId_"+(new Date).getTime(),j=new Element("iframe",{src:"http://player.vimeo.com/video/"+$[3]+"?portrait="+d.vmPortrait,id:Y,width:O,height:R,frameborder:0}),c()):(K="obj",j=new Swiff("http://www.vimeo.com/moogaloop.swf?clip_id="+Y+"&amp;server=www.vimeo.com&amp;fullscreen="+d.fullscreenNum+"&amp;autoplay="+d.autoplayNum+"&amp;show_title="+d.vmTitle+"&amp;show_byline="+d.vmByline+"&amp;show_portrait="+d.vmPortrait+"&amp;color="+d.vmColor,{id:Y,width:O,height:R,params:{wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c())):N.match(/12seconds\.tv/i)?(K="obj",O=O||"430px",R=R||"360px",$=N.split("/"),Y=$[5],j=new Swiff("http://embed.12seconds.tv/players/remotePlayer.swf",{id:Y,width:O,height:R,params:{flashvars:"vid="+Y,wmode:d.wmode,bgcolor:d.bgcolor,allowscriptaccess:d.scriptaccess,allowfullscreen:d.fullscreen}}),c()):N.match(/\#mb_/i)?(K="inline",O=O||d.defaultWidth,R=R||d.defaultHeight,URLsplit=N.split("#"),j=document.id(URLsplit[1]).get("html"),c()):(K="url",O=O||d.defaultWidth,R=R||d.defaultHeight,Y="mediaId_"+(new Date).getTime(),j=new Element("iframe",{src:N,id:Y,width:O,height:R,frameborder:0}),c())),!1}function c(){"img"==K?(O=j.width,R=j.height,d.imgBackground?I.setStyles({backgroundImage:"url("+N+")",display:""}):(R>=S-d.imgPadding&&R/S>=O/k?(R=S-d.imgPadding,O=j.width=parseInt(R/j.height*O),j.height=R):O>=k-d.imgPadding&&R/S<O/k&&(O=k-d.imgPadding,R=j.height=parseInt(O/j.width*R),j.width=O),Browser.Engine.trident&&(j=document.id(j)),j.addEvent("mousedown",function(e){e.stop()}).addEvent("contextmenu",function(e){e.stop()}),I.setStyles({backgroundImage:"none",display:""}),j.inject(I))):"obj"==K?Browser.Plugins.Flash.version<7&&"false"==X?(I.setStyles({backgroundImage:"none",display:""}),I.set("html",'<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>'),O=d.DefaultWidth,R=d.DefaultHeight):Browser.Plugins.Flash.version<10&&"true"==X?(I.setStyles({backgroundImage:"none",display:""}),I.set("html",'<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>'),O=d.DefaultWidth,R=d.DefaultHeight):(I.setStyles({backgroundImage:"none",display:""}),j.inject(I)):"qt"==K?I.setStyles({backgroundImage:"none",display:""}):"inline"==K?(I.setStyles({backgroundImage:"none",display:""}),I.set("html",j)):"url"==K?(I.setStyles({backgroundImage:"none",display:""}),j.inject(I)):(I.setStyles({backgroundImage:"none",display:""}),I.set("html",'<div id="mbError"><b>Error</b><br/>A file type error has occoured contact the webmaster for more information.</div>'),O=d.defaultWidth,R=d.defaultHeight),I.setStyles({width:O,height:R}),W.setStyles({width:O}),_.setStyles({width:O}),T.set("html",d.showCaption?P[0]:""),W.set("html",d.showCaption&&P.length>1?P[1]:""),"true"==Z||"true"==ee?_.set("html","<a href='/rights.html' id=/'mbRequestRR/'>License this image >></a>"):_.set("html",""),A.set("html",d.showCounter&&h.length>1?d.counterText.replace(/{x}/,f+1).replace(/{y}/,h.length):""),u>=0&&h[u][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)&&(V.src=h[u][0].replace(/twitpic\.com/i,"twitpic.com/show/full")),g>=0&&h[g][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)&&(G.src=h[g][0].replace(/twitpic\.com/i,"twitpic.com/show/full")),O=I.offsetWidth,R=I.offsetHeight+C.offsetHeight,y=R>=b+b?-b:-(R/2),x=O>=v+v?-v:-(O/2),d.resizeOpening?E.resize.start({width:O,height:R,marginTop:y-U,marginLeft:x-U}):(F.setStyles({width:O,height:R,marginTop:y-U,marginLeft:x-U}),s())}function s(){E.image.start(1)}function n(){F.className="",u>=0&&(M.style.display=""),g>=0&&(D.style.display=""),E.bottom.start(1),w()}function m(){j&&(j.onload=$empty),E.resize.cancel(),E.image.cancel().set(0),E.bottom.cancel().set(0),$$(M,D).setStyle("display","none")}function p(){if(f>=0){j.onload=$empty,I.set("html","");for(var e in E)E[e].cancel();F.setStyle("display","none"),E.overlay.chain(t).start(0),w()}return!1}function w(){X="false",Z="false",ee="false"}var d,h,f,u,g,b,y,v,x,k,S,E,j,B,F,I,C,P,T,W,_,M,A,D,N,H,z,L,O,R,$,q,U,V=new Image,G=new Image,J=!1,Q=!1,K="none",Y="mediaBox",X="false",Z="false",ee="false";window.addEvent("domready",function(){document.id(document.body).adopt($$([B=new Element("div",{id:"mbOverlay"}).addEvent("click",p),F=new Element("div",{id:"mbCenter"})]).setStyle("display","none")),I=new Element("div",{id:"mbImage"}).injectInside(F),C=new Element("div",{id:"mbBottom"}).injectInside(F).adopt(A=new Element("div",{id:"mbNumber"}),closeLink=new Element("a",{id:"mbCloseLink",href:"#"}).addEvent("click",p),D=new Element("a",{id:"mbNextLink",href:"#"}).addEvent("click",a),M=new Element("a",{id:"mbPrevLink",href:"#"}).addEvent("click",i),T=new Element("div",{id:"mbTitle"}),W=new Element("div",{id:"mbCaption"}),_=new Element("div",{id:"mbRequestRR"})),E={overlay:new Fx.Tween(B,{property:"opacity",duration:360}).set(0),image:new Fx.Tween(I,{property:"opacity",duration:360,onComplete:n}),bottom:new Fx.Tween(C,{property:"opacity",duration:240}).set(0)}}),Mediabox={close:function(){p()},open:function(l,i,a){return d=$extend({text:["<big>&laquo;</big>","<big>&raquo;</big>","<big>&times;</big>"],loop:!1,keyboard:!0,alpha:!0,stopKey:!1,overlayOpacity:.7,resizeOpening:!0,resizeDuration:240,resizeTransition:!1,initialWidth:320,initialHeight:180,defaultWidth:640,defaultHeight:360,showCaption:!0,showCounter:!0,counterText:"({x} of {y})",imgBackground:!0,imgPadding:100,html5:"true",scriptaccess:"true",fullscreen:"true",fullscreenNum:"1",autoplay:"true",autoplayNum:"1",autoplayYes:"yes",volume:"100",medialoop:"true",bgcolor:"#000000",wmode:"opaque",useNB:!1,playerpath:"/js/NonverBlaster.swf",controlColor:"0xFFFFFF",controlBackColor:"0x000000",showTimecode:"false",JWplayerpath:"/video/swf/player.swf",backcolor:"000000",frontcolor:"999999",lightcolor:"336699",screencolor:"000000",controlbar:"over",abouttext:"Philadelphia Museum of Art",aboutlink:"http://www.philamuseum.org",logoFile:"http://www.philamuseum.org/video/swf/logo.png",logoHide:"false",logoLink:"http://www.philamuseum.org",plugins:"viral-2, gapro-1",viralEmail_footer:"",viralOncomplete:"none",viralOnpause:"false",gaproAccountid:"UA-1914086-1",gaproTrackstarts:"true",gaproTrackpercentage:"true",gaproTracktime:"true",allownetworking:"all",allowscriptaccess:"always",autoplay:"false",wmode:"transparent",PMAzoomerpath:"/f_widgets/zoomBigins/zoomBigins.swf",menu:"false",BASE:".",bgcolor:"#FFFFFF",PMAflipbookpath:"/f_widgets/zoomFlipBooks/zoomFlipBooks.swf",controller:"true",flInfo:"true",revverID:"187866",revverFullscreen:"true",revverBack:"000000",revverFront:"ffffff",revverGrad:"000000",usViewers:"true",ytBorder:"0",ytColor1:"000000",ytColor2:"333333",ytQuality:"&ap=%2526fmt%3D18",ytRel:"0",ytInfo:"1",ytSearch:"0",vuPlayer:"basic",vmTitle:"1",vmByline:"1",vmPortrait:"1",vmColor:"ffffff"},a||{}),M.set("html",d.text[0]),D.set("html",d.text[1]),closeLink.set("html",d.text[2]),U=F.getStyle("padding-left").toInt()+I.getStyle("margin-left").toInt()+I.getStyle("padding-left").toInt(),Browser.Engine.gecko&&Browser.Engine.version<19&&(J=!0,d.overlayOpacity=1,B.className="mbOverlayFF"),Browser.Engine.trident&&Browser.Engine.version<5&&(Q=!0,B.className="mbOverlayIE",B.setStyle("position","absolute"),e()),"string"==typeof l&&(l=[[l,i,a]],i=0),h=l,d.loop=d.loop&&h.length>1,o(),t(!0),b=window.getScrollTop()+window.getHeight()/2,v=window.getScrollLeft()+window.getWidth()/2,E.resize=new Fx.Morph(F,$extend({duration:d.resizeDuration,onComplete:s},d.resizeTransition?{transition:d.resizeTransition}:{})),F.setStyles({top:b,left:"50%",width:d.initialWidth,height:d.initialHeight,marginTop:-(d.initialHeight/2)-U,marginLeft:-(d.initialWidth/2)-U,display:""}),E.overlay.start(d.overlayOpacity),r(i)}},Element.implement({mediabox:function(e,o){return $$(this).mediabox(e,o),this}}),Elements.implement({mediabox:function(e,o,t){o=o||function(e){return L=e.rel.split(/[\[\]]/),L=L[1],[e.href,e.title,L]},t=t||function(){return!0};var l=this;return l.addEvent("contextmenu",function(e){this.toString().match(/\.gif|\.jpg|\.jpeg|\.png/i)&&e.stop()}),l.removeEvents("click").addEvent("click",function(){var i=l.filter(t,this),a=[],r=[];return i.each(function(e,o){r.indexOf(e.toString())<0&&(a.include(i[o]),r.include(i[o].toString()))}),Mediabox.open(a.map(o),r.indexOf(this.toString()),e)}),l}})}(),Mediabox.scanPage=function(){var e=$$("a").filter(function(e){return e.rel&&e.rel.test(/^lightbox/i)});$$(e).mediabox({},null,function(e){var o=this.rel.replace(/[[]|]/gi," "),t=o.split(" ");return this==e||this.rel.length>8&&e.rel.match(t[1])})},window.addEvent("domready",Mediabox.scanPage);