var Mediabox;
(function () {
    var E, i, V, M, U, p, K, m, o, l, P, B, v, C = new Image(),
        ab = new Image(),
        t = false,
        z = false,
        Y, b, k, c, aa, J, S, D, Z, ac, f, I, W, L, A, G, q, j = "none",
        g, d = "mediaBox",
        H, n, F = "false",
        O = "false",
        e = "false";
    window.addEvent("domready", function () {
        document.id(document.body).adopt($$([Y = new Element("div", {
            id: "mbOverlay"
        }).addEvent("click", T), b = new Element("div", {
            id: "mbCenter"
        })]).setStyle("display", "none"));
        k = new Element("div", {
            id: "mbImage"
        }).injectInside(b);
        c = new Element("div", {
            id: "mbBottom"
        }).injectInside(b).adopt(ac = new Element("div", {
            id: "mbNumber"
        }), closeLink = new Element("a", {
            id: "mbCloseLink",
            href: "#"
        }).addEvent("click", T), f = new Element("a", {
            id: "mbNextLink",
            href: "#"
        }).addEvent("click", h), Z = new Element("a", {
            id: "mbPrevLink",
            href: "#"
        }).addEvent("click", Q), J = new Element("div", {
            id: "mbTitle"
        }), S = new Element("div", {
            id: "mbCaption"
        }), D = new Element("div", {
            id: "mbRequestRR"
        }));
        B = {
            overlay: new Fx.Tween(Y, {
                property: "opacity",
                duration: 360
            }).set(0),
            image: new Fx.Tween(k, {
                property: "opacity",
                duration: 360,
                onComplete: N
            }),
            bottom: new Fx.Tween(c, {
                property: "opacity",
                duration: 240
            }).set(0)
        }
    });
    Mediabox = {
        close: function () {
            T()
        },
        open: function (af, ae, ad) {
            E = $extend({
                text: ["<big>&laquo;</big>", "<big>&raquo;</big>", "<big>&times;</big>"],
                loop: false,
                keyboard: true,
                alpha: true,
                stopKey: false,
                overlayOpacity: 0.7,
                resizeOpening: true,
                resizeDuration: 240,
                resizeTransition: false,
                initialWidth: 320,
                initialHeight: 180,
                defaultWidth: 640,
                defaultHeight: 360,
                showCaption: true,
                showCounter: true,
                counterText: "({x} of {y})",
                imgBackground: true,
                imgPadding: 100,
                html5: "true",
                scriptaccess: "true",
                fullscreen: "true",
                fullscreenNum: "1",
                autoplay: "true",
                autoplayNum: "1",
                autoplayYes: "yes",
                volume: "100",
                medialoop: "true",
                bgcolor: "#000000",
                wmode: "opaque",
                useNB: false,
                playerpath: "/js/NonverBlaster.swf",
                controlColor: "0xFFFFFF",
                controlBackColor: "0x000000",
                showTimecode: "false",
                JWplayerpath: "/video/swf/player.swf",
                backcolor: "000000",
                frontcolor: "999999",
                lightcolor: "336699",
                screencolor: "000000",
                controlbar: "over",
                abouttext: "Philadelphia Museum of Art",
                aboutlink: "http://www.philamuseum.org",
                logoFile: "http://www.philamuseum.org/video/swf/logo.png",
                logoHide: "false",
                logoLink: "http://www.philamuseum.org",
                plugins: "viral-2, gapro-1",
                viralEmail_footer: "",
                viralOncomplete: "none",
                viralOnpause: "false",
                gaproAccountid: "UA-1914086-1",
                gaproTrackstarts: "true",
                gaproTrackpercentage: "true",
                gaproTracktime: "true",
                allownetworking: "all",
                allowscriptaccess: "always",
                autoplay: "false",
                wmode: "transparent",
                PMAzoomerpath: "/f_widgets/zoomBigins/zoomBigins.swf",
                menu: "false",
                BASE: ".",
                bgcolor: "#FFFFFF",
                PMAflipbookpath: "/f_widgets/zoomFlipBooks/zoomFlipBooks.swf",
                controller: "true",
                flInfo: "true",
                revverID: "187866",
                revverFullscreen: "true",
                revverBack: "000000",
                revverFront: "ffffff",
                revverGrad: "000000",
                usViewers: "true",
                ytBorder: "0",
                ytColor1: "000000",
                ytColor2: "333333",
                ytQuality: "&ap=%2526fmt%3D18",
                ytRel: "0",
                ytInfo: "1",
                ytSearch: "0",
                vuPlayer: "basic",
                vmTitle: "1",
                vmByline: "1",
                vmPortrait: "1",
                vmColor: "ffffff"
            }, ad || {});
            Z.set("html", E.text[0]);
            f.set("html", E.text[1]);
            closeLink.set("html", E.text[2]);
            n = b.getStyle("padding-left").toInt() + k.getStyle("margin-left").toInt() + k.getStyle("padding-left").toInt();
            if ((Browser.Engine.gecko) && (Browser.Engine.version < 19)) {
                t = true;
                E.overlayOpacity = 1;
                Y.className = "mbOverlayFF"
            }
            if ((Browser.Engine.trident) && (Browser.Engine.version < 5)) {
                z = true;
                Y.className = "mbOverlayIE";
                Y.setStyle("position", "absolute");
                R()
            }
            if (typeof af == "string") {
                af = [
                    [af, ae, ad]
                ];
                ae = 0
            }
            i = af;
            E.loop = E.loop && (i.length > 1);
            s();
            u(true);
            p = window.getScrollTop() + (window.getHeight() / 2);
            m = window.getScrollLeft() + (window.getWidth() / 2);
            B.resize = new Fx.Morph(b, $extend({
                duration: E.resizeDuration,
                onComplete: X
            }, E.resizeTransition ? {
                transition: E.resizeTransition
            } : {}));
            b.setStyles({
                top: p,
                left: "50%",
                width: E.initialWidth,
                height: E.initialHeight,
                marginTop: -(E.initialHeight / 2) - n,
                marginLeft: -(E.initialWidth / 2) - n,
                display: ""
            });
            B.overlay.start(E.overlayOpacity);
            return a(ae)
        }
    };
    Element.implement({
        mediabox: function (ad, ae) {
            $$(this).mediabox(ad, ae);
            return this
        }
    });
    Elements.implement({
        mediabox: function (ad, ag, af) {
            ag = ag || function (ah) {
                A = ah.rel.split(/[\[\]]/);
                A = A[1];
                return [ah.href, ah.title, A]
            };
            af = af || function () {
                return true
            };
            var ae = this;
            ae.addEvent("contextmenu", function (ah) {
                if (this.toString().match(/\.gif|\.jpg|\.jpeg|\.png/i)) {
                    ah.stop()
                }
            });
            ae.removeEvents("click").addEvent("click", function () {
                var ai = ae.filter(af, this);
                var aj = [];
                var ah = [];
                ai.each(function (al, ak) {
                    if (ah.indexOf(al.toString()) < 0) {
                        aj.include(ai[ak]);
                        ah.include(ai[ak].toString())
                    }
                });
                return Mediabox.open(aj.map(ag), ah.indexOf(this.toString()), ad)
            });
            return ae
        }
    });

    function R() {
        Y.setStyles({
            top: window.getScrollTop(),
            left: window.getScrollLeft()
        })
    }

    function s() {
        l = window.getWidth();
        P = window.getHeight();
        Y.setStyles({
            width: l,
            height: P
        })
    }

    function u(ad) {
        if (Browser.Engine.gecko) {
            ["object", window.ie ? "select" : "embed"].forEach(function (af) {
                Array.forEach(document.getElementsByTagName(af), function (ag) {
                    if (ad) {
                        ag._mediabox = ag.style.visibility
                    }
                    ag.style.visibility = ad ? "hidden" : ag._mediabox
                })
            })
        }
        Y.style.display = ad ? "" : "none";
        var ae = ad ? "addEvent" : "removeEvent";
        if (z) {
            window[ae]("scroll", R)
        }
        window[ae]("resize", s);
        if (E.keyboard) {
            document[ae]("keydown", x)
        }
    }

    function x(ad) {
        if (E.alpha) {
            switch (ad.code) {
            case 27:
            case 88:
            case 67:
                T();
                break;
            case 37:
            case 80:
                Q();
                break;
            case 39:
            case 78:
                h()
            }
        } else {
            switch (ad.code) {
            case 27:
                T();
                break;
            case 37:
                Q();
                break;
            case 39:
                h()
            }
        } if (E.stopKey) {
            return false
        }
    }

    function Q() {
        return a(M)
    }

    function h() {
        return a(U)
    }

    function a(ad) {
        if (ad >= 0) {
            k.set("html", "");
            V = ad;
            M = ((V || !E.loop) ? V : i.length) - 1;
            U = V + 1;
            if (U == i.length) {
                U = E.loop ? 0 : -1
            }
            y();
            b.className = "mbLoading";
            if (!i[ad][2]) {
                i[ad][2] = ""
            }
            W = i[ad][2].split(" ");
            L = W.length;
            if (L > 1) {
                G = (W[L - 2].match("%")) ? (window.getWidth() * ((W[L - 2].replace("%", "")) * 0.01)) + "px" : W[L - 2] + "px";
                q = (W[L - 1].match("%")) ? (window.getHeight() * ((W[L - 1].replace("%", "")) * 0.01)) + "px" : W[L - 1] + "px"
            } else {
                G = "";
                q = ""
            }
            I = i[ad][0];
            I = encodeURI(I).replace("(", "%28").replace(")", "%29");
            aa = i[V][1].split("::");
            if (I.match(/quietube\.com/i)) {
                g = I.split("v.php/");
                I = g[1]
            } else {
                if (I.match(/\/\/yfrog/i)) {
                    j = (I.substring(I.length - 1));
                    if (j.match(/b|g|j|p|t/i)) {
                        j = "image"
                    }
                    if (j == "s") {
                        j = "flash"
                    }
                    if (j.match(/f|z/i)) {
                        j = "video"
                    }
                    I = I + ":iphone"
                }
            } if (I.match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i) || j == "image") {
                j = "img";
                I = I.replace(/twitpic\.com/i, "twitpic.com/show/full");
                v = new Image();
                v.onload = r;
                v.src = I
            } else {
                if (I.match(/\.flv|\.mp4/i) || j == "video") {
                    j = "obj";
                    G = G || E.defaultWidth;
                    q = q || E.defaultHeight;
                    if (E.useNB) {
                        v = new Swiff("" + E.playerpath + "?mediaURL=" + I + "&allowSmoothing=true&autoPlay=" + E.autoplay + "&buffer=6&showTimecode=" + E.showTimecode + "&loop=" + E.medialoop + "&controlColor=" + E.controlColor + "&controlBackColor=" + E.controlBackColor + "&defaultVolume=" + E.volume + "&scaleIfFullScreen=true&showScalingButton=true&crop=false", {
                            id: "MediaboxSWF",
                            width: G,
                            height: q,
                            params: {
                                wmode: E.wmode,
                                bgcolor: E.bgcolor,
                                allowscriptaccess: E.scriptaccess,
                                allowfullscreen: E.fullscreen
                            }
                        })
                    } else {
                        v = new Swiff("" + E.JWplayerpath + "?file=" + I + "&backcolor=" + E.backcolor + "&frontcolor=" + E.frontcolor + "&lightcolor=" + E.lightcolor + "&screencolor=" + E.screencolor + "&autostart=" + E.autoplay + "&controlbar=" + E.controlbar, {
                            id: "MediaboxSWF",
                            width: G,
                            height: q,
                            params: {
                                wmode: E.wmode,
                                bgcolor: E.bgcolor,
                                allowscriptaccess: E.scriptaccess,
                                allowfullscreen: E.fullscreen
                            }
                        })
                    }
                    r()
                } else {
                    if (I.match(/\.mp3|\.aac|tweetmic\.com|tmic\.fm/i) || j == "audio") {
                        j = "obj";
                        G = G || E.defaultWidth;
                        q = q || "20px";
                        if (I.match(/tweetmic\.com|tmic\.fm/i)) {
                            I = I.split("/");
                            I[4] = I[4] || I[3];
                            I = "http://media4.fjarnet.net/tweet/tweetmicapp-" + I[4] + ".mp3"
                        }
                        if (E.useNB) {
                            v = new Swiff("" + E.playerpath + "?mediaURL=" + I + "&allowSmoothing=true&autoPlay=" + E.autoplay + "&buffer=6&showTimecode=" + E.showTimecode + "&loop=" + E.medialoop + "&controlColor=" + E.controlColor + "&controlBackColor=" + E.controlBackColor + "&defaultVolume=" + E.volume + "&scaleIfFullScreen=true&showScalingButton=true&crop=false", {
                                id: "MediaboxSWF",
                                width: G,
                                height: q,
                                params: {
                                    wmode: E.wmode,
                                    bgcolor: E.bgcolor,
                                    allowscriptaccess: E.scriptaccess,
                                    allowfullscreen: E.fullscreen
                                }
                            })
                        } else {
                            v = new Swiff("" + E.JWplayerpath + "?file=" + I + "&backcolor=" + E.backcolor + "&frontcolor=" + E.frontcolor + "&lightcolor=" + E.lightcolor + "&screencolor=" + E.screencolor + "&autostart=" + E.autoplay, {
                                id: "MediaboxSWF",
                                width: G,
                                height: q,
                                params: {
                                    wmode: E.wmode,
                                    bgcolor: E.bgcolor,
                                    allowscriptaccess: E.scriptaccess,
                                    allowfullscreen: E.fullscreen
                                }
                            })
                        }
                        r()
                    } else {
                        if (I.match(/\.swf/i) || j == "flash") {
                            j = "obj";
                            G = G || E.defaultWidth;
                            q = q || E.defaultHeight;
                            v = new Swiff(I, {
                                id: "MediaboxSWF",
                                width: G,
                                height: q,
                                params: {
                                    wmode: E.wmode,
                                    bgcolor: E.bgcolor
                                }
                            });
                            r()
                        } else {
                            if (I.match(/philamuseum\.org\/watch/i)) {
                                F = "true";
                                j = "obj";
                                g = I.split("v=");
                                g = g[1].split("&");
                                d = g[0];
                                G = G || E.defaultWidth;
                                q = q || E.defaultHeight;
                                pmaconfig = "http://www.philamuseum.org/video/" + d + ".xml";
                                v = new Swiff("" + E.JWplayerpath + "?config=" + pmaconfig + "&backcolor=" + E.backcolor + "&frontcolor=" + E.frontcolor + "&lightcolor=" + E.lightcolor + "&screencolor=" + E.screencolor + "&autostart=" + E.autoplay + "&abouttext=" + E.abouttext + "&aboutlink=" + E.aboutlink + "&logo.file=" + E.logoFile + "&logo.hide=" + E.logoHide + "&logo.link=" + E.logoLink + "&plugins=" + E.plugins + "&viral.email_footer=" + E.viralEmail_footer + "&viral.oncomplete=" + E.viralOncomplete + "&viral.onpause=" + E.viralOnpause + "&gapro.accountid=" + E.gaproAccountid + "&gapro.trackstarts=" + E.gaproTrackstarts + "&gapro.trackpercentage=" + E.gaproTrackpercentage + "&gapro.tracktime=" + E.gaproTracktime, {
                                    id: "MediaboxSWF",
                                    width: G,
                                    height: q,
                                    params: {
                                        wmode: E.wmode,
                                        bgcolor: E.bgcolor,
                                        allowscriptaccess: E.scriptaccess,
                                        allowfullscreen: E.fullscreen,
                                        allownetworking: E.allownetworking
                                    }
                                });
                                r()
                            } else {
                                if (I.match(/philamuseum\.org\/zoom/i)) {
                                    O = "true";
                                    j = "obj";
                                    g = I.split("z=");
                                    g = g[1].split("&");
                                    d = g[0];
                                    G = G || E.defaultWidth;
                                    q = q || E.defaultHeight;
                                    this.closeModal = "yes";
                                    v = new Swiff("" + E.PMAzoomerpath + "?assetName=" + d + "&backcolor=" + E.backcolor + "&frontcolor=" + E.frontcolor + "&lightcolor=" + E.lightcolor + "&screencolor=" + E.screencolor + "&autostart=" + E.autoplay + "&closeModal=" + this.closeModal, {
                                        id: "MediaboxSWF",
                                        width: G,
                                        height: q,
                                        params: {
                                            wmode: E.wmode,
                                            bgcolor: E.bgcolor,
                                            allowscriptaccess: E.scriptaccess,
                                            allowfullscreen: E.fullscreen,
                                            allownetworking: E.allownetworking,
                                            BASE: E.BASE
                                        }
                                    });
                                    r()
                                } else {
                                    if (I.match(/philamuseum\.org\/flipBook/i)) {
                                        e = "true";
                                        j = "obj";
                                        g = I.split("fb=");
                                        g = g[1].split("&");
                                        d = g[0];
                                        G = G || E.defaultWidth;
                                        q = q || E.defaultHeight;
                                        this.closeModal = "yes";
                                        this.showInfo = "0";
                                        v = new Swiff("" + E.PMAflipbookpath + "?assetName=" + d + "&backcolor=" + E.backcolor + "&frontcolor=" + E.frontcolor + "&lightcolor=" + E.lightcolor + "&screencolor=" + E.screencolor + "&autostart=" + E.autoplay + "&closeModal=" + this.closeModal + "&showInfo=" + this.showInfo, {
                                            id: "MediaboxSWF",
                                            width: G,
                                            height: q,
                                            params: {
                                                wmode: E.wmode,
                                                bgcolor: E.bgcolor,
                                                allowscriptaccess: E.scriptaccess,
                                                allowfullscreen: E.fullscreen,
                                                allownetworking: E.allownetworking,
                                                BASE: E.BASE
                                            }
                                        });
                                        r()
                                    } else {
                                        if (I.match(/\.mov|\.m4v|\.m4a|\.aiff|\.avi|\.caf|\.dv|\.mid|\.m3u|\.mp3|\.mp2|\.mp4|\.qtz/i) || j == "qt") {
                                            j = "qt";
                                            G = G || E.defaultWidth;
                                            q = (parseInt(q) + 16) + "px" || E.defaultHeight;
                                            v = new Quickie(I, {
                                                id: "MediaboxQT",
                                                width: G,
                                                height: q,
                                                container: "mbImage",
                                                attributes: {
                                                    controller: E.controller,
                                                    autoplay: E.autoplay,
                                                    volume: E.volume,
                                                    loop: E.medialoop,
                                                    bgcolor: E.bgcolor
                                                }
                                            });
                                            r()
                                        } else {
                                            if (I.match(/blip\.tv/i)) {
                                                j = "obj";
                                                G = G || "640px";
                                                q = q || "390px";
                                                v = new Swiff(I, {
                                                    src: I,
                                                    width: G,
                                                    height: q,
                                                    params: {
                                                        wmode: E.wmode,
                                                        bgcolor: E.bgcolor,
                                                        allowscriptaccess: E.scriptaccess,
                                                        allowfullscreen: E.fullscreen
                                                    }
                                                });
                                                r()
                                            } else {
                                                if (I.match(/break\.com/i)) {
                                                    j = "obj";
                                                    G = G || "464px";
                                                    q = q || "376px";
                                                    d = I.match(/\d{6}/g);
                                                    v = new Swiff("http://embed.break.com/" + d, {
                                                        width: G,
                                                        height: q,
                                                        params: {
                                                            wmode: E.wmode,
                                                            bgcolor: E.bgcolor,
                                                            allowscriptaccess: E.scriptaccess,
                                                            allowfullscreen: E.fullscreen
                                                        }
                                                    });
                                                    r()
                                                } else {
                                                    if (I.match(/dailymotion\.com/i)) {
                                                        j = "obj";
                                                        G = G || "480px";
                                                        q = q || "381px";
                                                        v = new Swiff(I, {
                                                            id: d,
                                                            width: G,
                                                            height: q,
                                                            params: {
                                                                wmode: E.wmode,
                                                                bgcolor: E.bgcolor,
                                                                allowscriptaccess: E.scriptaccess,
                                                                allowfullscreen: E.fullscreen
                                                            }
                                                        });
                                                        r()
                                                    } else {
                                                        if (I.match(/facebook\.com/i)) {
                                                            j = "obj";
                                                            G = G || "320px";
                                                            q = q || "240px";
                                                            g = I.split("v=");
                                                            g = g[1].split("&");
                                                            d = g[0];
                                                            v = new Swiff("http://www.facebook.com/v/" + d, {
                                                                movie: "http://www.facebook.com/v/" + d,
                                                                classid: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                                                                width: G,
                                                                height: q,
                                                                params: {
                                                                    wmode: E.wmode,
                                                                    bgcolor: E.bgcolor,
                                                                    allowscriptaccess: E.scriptaccess,
                                                                    allowfullscreen: E.fullscreen
                                                                }
                                                            });
                                                            r()
                                                        } else {
                                                            if (I.match(/flickr\.com/i)) {
                                                                j = "obj";
                                                                G = G || "500px";
                                                                q = q || "375px";
                                                                g = I.split("/");
                                                                d = g[5];
                                                                v = new Swiff("http://www.flickr.com/apps/video/stewart.swf", {
                                                                    id: d,
                                                                    classid: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                                                                    width: G,
                                                                    height: q,
                                                                    params: {
                                                                        flashvars: "photo_id=" + d + "&amp;show_info_box=" + E.flInfo,
                                                                        wmode: E.wmode,
                                                                        bgcolor: E.bgcolor,
                                                                        allowscriptaccess: E.scriptaccess,
                                                                        allowfullscreen: E.fullscreen
                                                                    }
                                                                });
                                                                r()
                                                            } else {
                                                                if (I.match(/gametrailers\.com/i)) {
                                                                    j = "obj";
                                                                    G = G || "480px";
                                                                    q = q || "392px";
                                                                    d = I.match(/\d{5}/g);
                                                                    v = new Swiff("http://www.gametrailers.com/remote_wrap.php?mid=" + d, {
                                                                        id: d,
                                                                        width: G,
                                                                        height: q,
                                                                        params: {
                                                                            wmode: E.wmode,
                                                                            bgcolor: E.bgcolor,
                                                                            allowscriptaccess: E.scriptaccess,
                                                                            allowfullscreen: E.fullscreen
                                                                        }
                                                                    });
                                                                    r()
                                                                } else {
                                                                    if (I.match(/google\.com\/videoplay/i)) {
                                                                        j = "obj";
                                                                        G = G || "400px";
                                                                        q = q || "326px";
                                                                        g = I.split("=");
                                                                        d = g[1];
                                                                        v = new Swiff("http://video.google.com/googleplayer.swf?docId=" + d + "&autoplay=" + E.autoplayNum, {
                                                                            id: d,
                                                                            width: G,
                                                                            height: q,
                                                                            params: {
                                                                                wmode: E.wmode,
                                                                                bgcolor: E.bgcolor,
                                                                                allowscriptaccess: E.scriptaccess,
                                                                                allowfullscreen: E.fullscreen
                                                                            }
                                                                        });
                                                                        r()
                                                                    } else {
                                                                        if (I.match(/megavideo\.com/i)) {
                                                                            j = "obj";
                                                                            G = G || "640px";
                                                                            q = q || "360px";
                                                                            g = I.split("=");
                                                                            d = g[1];
                                                                            v = new Swiff("http://wwwstatic.megavideo.com/mv_player.swf?v=" + d, {
                                                                                id: d,
                                                                                width: G,
                                                                                height: q,
                                                                                params: {
                                                                                    wmode: E.wmode,
                                                                                    bgcolor: E.bgcolor,
                                                                                    allowscriptaccess: E.scriptaccess,
                                                                                    allowfullscreen: E.fullscreen
                                                                                }
                                                                            });
                                                                            r()
                                                                        } else {
                                                                            if (I.match(/metacafe\.com\/watch/i)) {
                                                                                j = "obj";
                                                                                G = G || "400px";
                                                                                q = q || "345px";
                                                                                g = I.split("/");
                                                                                d = g[4];
                                                                                v = new Swiff("http://www.metacafe.com/fplayer/" + d + "/.swf?playerVars=autoPlay=" + E.autoplayYes, {
                                                                                    id: d,
                                                                                    width: G,
                                                                                    height: q,
                                                                                    params: {
                                                                                        wmode: E.wmode,
                                                                                        bgcolor: E.bgcolor,
                                                                                        allowscriptaccess: E.scriptaccess,
                                                                                        allowfullscreen: E.fullscreen
                                                                                    }
                                                                                });
                                                                                r()
                                                                            } else {
                                                                                if (I.match(/vids\.myspace\.com/i)) {
                                                                                    j = "obj";
                                                                                    G = G || "425px";
                                                                                    q = q || "360px";
                                                                                    v = new Swiff(I, {
                                                                                        id: d,
                                                                                        width: G,
                                                                                        height: q,
                                                                                        params: {
                                                                                            wmode: E.wmode,
                                                                                            bgcolor: E.bgcolor,
                                                                                            allowscriptaccess: E.scriptaccess,
                                                                                            allowfullscreen: E.fullscreen
                                                                                        }
                                                                                    });
                                                                                    r()
                                                                                } else {
                                                                                    if (I.match(/revver\.com/i)) {
                                                                                        j = "obj";
                                                                                        G = G || "480px";
                                                                                        q = q || "392px";
                                                                                        g = I.split("/");
                                                                                        d = g[4];
                                                                                        v = new Swiff("http://flash.revver.com/player/1.0/player.swf?mediaId=" + d + "&affiliateId=" + E.revverID + "&allowFullScreen=" + E.revverFullscreen + "&autoStart=" + E.autoplay + "&backColor=#" + E.revverBack + "&frontColor=#" + E.revverFront + "&gradColor=#" + E.revverGrad + "&shareUrl=revver", {
                                                                                            id: d,
                                                                                            width: G,
                                                                                            height: q,
                                                                                            params: {
                                                                                                wmode: E.wmode,
                                                                                                bgcolor: E.bgcolor,
                                                                                                allowscriptaccess: E.scriptaccess,
                                                                                                allowfullscreen: E.fullscreen
                                                                                            }
                                                                                        });
                                                                                        r()
                                                                                    } else {
                                                                                        if (I.match(/rutube\.ru/i)) {
                                                                                            j = "obj";
                                                                                            G = G || "470px";
                                                                                            q = q || "353px";
                                                                                            g = I.split("=");
                                                                                            d = g[1];
                                                                                            v = new Swiff("http://video.rutube.ru/" + d, {
                                                                                                movie: "http://video.rutube.ru/" + d,
                                                                                                width: G,
                                                                                                height: q,
                                                                                                params: {
                                                                                                    wmode: E.wmode,
                                                                                                    bgcolor: E.bgcolor,
                                                                                                    allowscriptaccess: E.scriptaccess,
                                                                                                    allowfullscreen: E.fullscreen
                                                                                                }
                                                                                            });
                                                                                            r()
                                                                                        } else {
                                                                                            if (I.match(/seesmic\.com/i)) {
                                                                                                j = "obj";
                                                                                                G = G || "435px";
                                                                                                q = q || "355px";
                                                                                                g = I.split("/");
                                                                                                d = g[5];
                                                                                                v = new Swiff("http://seesmic.com/Standalone.swf?video=" + d, {
                                                                                                    id: d,
                                                                                                    width: G,
                                                                                                    height: q,
                                                                                                    params: {
                                                                                                        wmode: E.wmode,
                                                                                                        bgcolor: E.bgcolor,
                                                                                                        allowscriptaccess: E.scriptaccess,
                                                                                                        allowfullscreen: E.fullscreen
                                                                                                    }
                                                                                                });
                                                                                                r()
                                                                                            } else {
                                                                                                if (I.match(/tudou\.com/i)) {
                                                                                                    j = "obj";
                                                                                                    G = G || "400px";
                                                                                                    q = q || "340px";
                                                                                                    g = I.split("/");
                                                                                                    d = g[5];
                                                                                                    v = new Swiff("http://www.tudou.com/v/" + d, {
                                                                                                        width: G,
                                                                                                        height: q,
                                                                                                        params: {
                                                                                                            wmode: E.wmode,
                                                                                                            bgcolor: E.bgcolor,
                                                                                                            allowscriptaccess: E.scriptaccess,
                                                                                                            allowfullscreen: E.fullscreen
                                                                                                        }
                                                                                                    });
                                                                                                    r()
                                                                                                } else {
                                                                                                    if (I.match(/twitcam\.com/i)) {
                                                                                                        j = "obj";
                                                                                                        G = G || "320px";
                                                                                                        q = q || "265px";
                                                                                                        g = I.split("/");
                                                                                                        d = g[3];
                                                                                                        v = new Swiff("http://static.livestream.com/chromelessPlayer/wrappers/TwitcamPlayer.swf?hash=" + d, {
                                                                                                            width: G,
                                                                                                            height: q,
                                                                                                            params: {
                                                                                                                wmode: E.wmode,
                                                                                                                bgcolor: E.bgcolor,
                                                                                                                allowscriptaccess: E.scriptaccess,
                                                                                                                allowfullscreen: E.fullscreen
                                                                                                            }
                                                                                                        });
                                                                                                        r()
                                                                                                    } else {
                                                                                                        if (I.match(/twiturm\.com/i)) {
                                                                                                            j = "obj";
                                                                                                            G = G || "402px";
                                                                                                            q = q || "48px";
                                                                                                            g = I.split("/");
                                                                                                            d = g[3];
                                                                                                            v = new Swiff("http://twiturm.com/flash/twiturm_mp3.swf?playerID=0&sf=" + d, {
                                                                                                                width: G,
                                                                                                                height: q,
                                                                                                                params: {
                                                                                                                    wmode: E.wmode,
                                                                                                                    bgcolor: E.bgcolor,
                                                                                                                    allowscriptaccess: E.scriptaccess,
                                                                                                                    allowfullscreen: E.fullscreen
                                                                                                                }
                                                                                                            });
                                                                                                            r()
                                                                                                        } else {
                                                                                                            if (I.match(/twitvid\.com/i)) {
                                                                                                                j = "obj";
                                                                                                                G = G || "600px";
                                                                                                                q = q || "338px";
                                                                                                                g = I.split("/");
                                                                                                                d = g[3];
                                                                                                                v = new Swiff("http://www.twitvid.com/player/" + d, {
                                                                                                                    width: G,
                                                                                                                    height: q,
                                                                                                                    params: {
                                                                                                                        wmode: E.wmode,
                                                                                                                        bgcolor: E.bgcolor,
                                                                                                                        allowscriptaccess: E.scriptaccess,
                                                                                                                        allowfullscreen: E.fullscreen
                                                                                                                    }
                                                                                                                });
                                                                                                                r()
                                                                                                            } else {
                                                                                                                if (I.match(/ustream\.tv/i)) {
                                                                                                                    j = "obj";
                                                                                                                    G = G || "400px";
                                                                                                                    q = q || "326px";
                                                                                                                    v = new Swiff(I + "&amp;viewcount=" + E.usViewers + "&amp;autoplay=" + E.autoplay, {
                                                                                                                        width: G,
                                                                                                                        height: q,
                                                                                                                        params: {
                                                                                                                            wmode: E.wmode,
                                                                                                                            bgcolor: E.bgcolor,
                                                                                                                            allowscriptaccess: E.scriptaccess,
                                                                                                                            allowfullscreen: E.fullscreen
                                                                                                                        }
                                                                                                                    });
                                                                                                                    r()
                                                                                                                } else {
                                                                                                                    if (I.match(/youku\.com/i)) {
                                                                                                                        j = "obj";
                                                                                                                        G = G || "480px";
                                                                                                                        q = q || "400px";
                                                                                                                        g = I.split("id_");
                                                                                                                        d = g[1];
                                                                                                                        v = new Swiff("http://player.youku.com/player.php/sid/" + d + "=/v.swf", {
                                                                                                                            width: G,
                                                                                                                            height: q,
                                                                                                                            params: {
                                                                                                                                wmode: E.wmode,
                                                                                                                                bgcolor: E.bgcolor,
                                                                                                                                allowscriptaccess: E.scriptaccess,
                                                                                                                                allowfullscreen: E.fullscreen
                                                                                                                            }
                                                                                                                        });
                                                                                                                        r()
                                                                                                                    } else {
                                                                                                                        if (I.match(/youtube\.com\/watch/i)) {
                                                                                                                            g = I.split("v=");
                                                                                                                            if (E.html5) {
                                                                                                                                j = "url";
                                                                                                                                G = G || "640px";
                                                                                                                                q = q || "385px";
                                                                                                                                d = "mediaId_" + new Date().getTime();
                                                                                                                                v = new Element("iframe", {
                                                                                                                                    src: "http://www.youtube.com/embed/" + g[1],
                                                                                                                                    id: d,
                                                                                                                                    width: G,
                                                                                                                                    height: q,
                                                                                                                                    frameborder: 0
                                                                                                                                });
                                                                                                                                r()
                                                                                                                            } else {
                                                                                                                                j = "obj";
                                                                                                                                d = g[1];
                                                                                                                                if (d.match(/fmt=22/i)) {
                                                                                                                                    H = "&ap=%2526fmt%3D22";
                                                                                                                                    G = G || "640px";
                                                                                                                                    q = q || "385px"
                                                                                                                                } else {
                                                                                                                                    if (d.match(/fmt=18/i)) {
                                                                                                                                        H = "&ap=%2526fmt%3D18";
                                                                                                                                        G = G || "560px";
                                                                                                                                        q = q || "345px"
                                                                                                                                    } else {
                                                                                                                                        H = E.ytQuality;
                                                                                                                                        G = G || "480px";
                                                                                                                                        q = q || "295px"
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                v = new Swiff("http://www.youtube.com/v/" + d + "&autoplay=" + E.autoplayNum + "&fs=" + E.fullscreenNum + H + "&border=" + E.ytBorder + "&color1=0x" + E.ytColor1 + "&color2=0x" + E.ytColor2 + "&rel=" + E.ytRel + "&showinfo=" + E.ytInfo + "&showsearch=" + E.ytSearch, {
                                                                                                                                    id: d,
                                                                                                                                    width: G,
                                                                                                                                    height: q,
                                                                                                                                    params: {
                                                                                                                                        wmode: E.wmode,
                                                                                                                                        bgcolor: E.bgcolor,
                                                                                                                                        allowscriptaccess: E.scriptaccess,
                                                                                                                                        allowfullscreen: E.fullscreen
                                                                                                                                    }
                                                                                                                                });
                                                                                                                                r()
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            if (I.match(/youtube\.com\/view/i)) {
                                                                                                                                j = "obj";
                                                                                                                                g = I.split("p=");
                                                                                                                                d = g[1];
                                                                                                                                G = G || "480px";
                                                                                                                                q = q || "385px";
                                                                                                                                v = new Swiff("http://www.youtube.com/p/" + d + "&autoplay=" + E.autoplayNum + "&fs=" + E.fullscreenNum + H + "&border=" + E.ytBorder + "&color1=0x" + E.ytColor1 + "&color2=0x" + E.ytColor2 + "&rel=" + E.ytRel + "&showinfo=" + E.ytInfo + "&showsearch=" + E.ytSearch, {
                                                                                                                                    id: d,
                                                                                                                                    width: G,
                                                                                                                                    height: q,
                                                                                                                                    params: {
                                                                                                                                        wmode: E.wmode,
                                                                                                                                        bgcolor: E.bgcolor,
                                                                                                                                        allowscriptaccess: E.scriptaccess,
                                                                                                                                        allowfullscreen: E.fullscreen
                                                                                                                                    }
                                                                                                                                });
                                                                                                                                r()
                                                                                                                            } else {
                                                                                                                                if (I.match(/veoh\.com/i)) {
                                                                                                                                    j = "obj";
                                                                                                                                    G = G || "410px";
                                                                                                                                    q = q || "341px";
                                                                                                                                    I = I.replace("%3D", "/");
                                                                                                                                    g = I.split("watch/");
                                                                                                                                    d = g[1];
                                                                                                                                    v = new Swiff("http://www.veoh.com/static/swf/webplayer/WebPlayer.swf?version=AFrontend.5.5.2.1001&permalinkId=" + d + "&player=videodetailsembedded&videoAutoPlay=" + E.AutoplayNum + "&id=anonymous", {
                                                                                                                                        id: d,
                                                                                                                                        width: G,
                                                                                                                                        height: q,
                                                                                                                                        params: {
                                                                                                                                            wmode: E.wmode,
                                                                                                                                            bgcolor: E.bgcolor,
                                                                                                                                            allowscriptaccess: E.scriptaccess,
                                                                                                                                            allowfullscreen: E.fullscreen
                                                                                                                                        }
                                                                                                                                    });
                                                                                                                                    r()
                                                                                                                                } else {
                                                                                                                                    if (I.match(/viddler\.com/i)) {
                                                                                                                                        j = "obj";
                                                                                                                                        G = G || "437px";
                                                                                                                                        q = q || "370px";
                                                                                                                                        g = I.split("/");
                                                                                                                                        d = g[4];
                                                                                                                                        v = new Swiff(I, {
                                                                                                                                            id: "viddler_" + d,
                                                                                                                                            movie: I,
                                                                                                                                            classid: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                                                                                                                                            width: G,
                                                                                                                                            height: q,
                                                                                                                                            params: {
                                                                                                                                                wmode: E.wmode,
                                                                                                                                                bgcolor: E.bgcolor,
                                                                                                                                                allowscriptaccess: E.scriptaccess,
                                                                                                                                                allowfullscreen: E.fullscreen,
                                                                                                                                                id: "viddler_" + d,
                                                                                                                                                movie: I
                                                                                                                                            }
                                                                                                                                        });
                                                                                                                                        r()
                                                                                                                                    } else {
                                                                                                                                        if (I.match(/viddyou\.com/i)) {
                                                                                                                                            j = "obj";
                                                                                                                                            G = G || "416px";
                                                                                                                                            q = q || "312px";
                                                                                                                                            g = I.split("=");
                                                                                                                                            d = g[1];
                                                                                                                                            v = new Swiff("http://www.viddyou.com/get/v2_" + E.vuPlayer + "/" + d + ".swf", {
                                                                                                                                                id: d,
                                                                                                                                                movie: "http://www.viddyou.com/get/v2_" + E.vuPlayer + "/" + d + ".swf",
                                                                                                                                                width: G,
                                                                                                                                                height: q,
                                                                                                                                                params: {
                                                                                                                                                    wmode: E.wmode,
                                                                                                                                                    bgcolor: E.bgcolor,
                                                                                                                                                    allowscriptaccess: E.scriptaccess,
                                                                                                                                                    allowfullscreen: E.fullscreen
                                                                                                                                                }
                                                                                                                                            });
                                                                                                                                            r()
                                                                                                                                        } else {
                                                                                                                                            if (I.match(/vimeo\.com/i)) {
                                                                                                                                                G = G || "640px";
                                                                                                                                                q = q || "360px";
                                                                                                                                                g = I.split("/");
                                                                                                                                                d = g[3];
                                                                                                                                                if (E.html5) {
                                                                                                                                                    j = "url";
                                                                                                                                                    d = "mediaId_" + new Date().getTime();
                                                                                                                                                    v = new Element("iframe", {
                                                                                                                                                        src: "http://player.vimeo.com/video/" + g[3] + "?portrait=" + E.vmPortrait,
                                                                                                                                                        id: d,
                                                                                                                                                        width: G,
                                                                                                                                                        height: q,
                                                                                                                                                        frameborder: 0
                                                                                                                                                    });
                                                                                                                                                    r()
                                                                                                                                                } else {
                                                                                                                                                    j = "obj";
                                                                                                                                                    v = new Swiff("http://www.vimeo.com/moogaloop.swf?clip_id=" + d + "&amp;server=www.vimeo.com&amp;fullscreen=" + E.fullscreenNum + "&amp;autoplay=" + E.autoplayNum + "&amp;show_title=" + E.vmTitle + "&amp;show_byline=" + E.vmByline + "&amp;show_portrait=" + E.vmPortrait + "&amp;color=" + E.vmColor, {
                                                                                                                                                        id: d,
                                                                                                                                                        width: G,
                                                                                                                                                        height: q,
                                                                                                                                                        params: {
                                                                                                                                                            wmode: E.wmode,
                                                                                                                                                            bgcolor: E.bgcolor,
                                                                                                                                                            allowscriptaccess: E.scriptaccess,
                                                                                                                                                            allowfullscreen: E.fullscreen
                                                                                                                                                        }
                                                                                                                                                    });
                                                                                                                                                    r()
                                                                                                                                                }
                                                                                                                                            } else {
                                                                                                                                                if (I.match(/12seconds\.tv/i)) {
                                                                                                                                                    j = "obj";
                                                                                                                                                    G = G || "430px";
                                                                                                                                                    q = q || "360px";
                                                                                                                                                    g = I.split("/");
                                                                                                                                                    d = g[5];
                                                                                                                                                    v = new Swiff("http://embed.12seconds.tv/players/remotePlayer.swf", {
                                                                                                                                                        id: d,
                                                                                                                                                        width: G,
                                                                                                                                                        height: q,
                                                                                                                                                        params: {
                                                                                                                                                            flashvars: "vid=" + d + "",
                                                                                                                                                            wmode: E.wmode,
                                                                                                                                                            bgcolor: E.bgcolor,
                                                                                                                                                            allowscriptaccess: E.scriptaccess,
                                                                                                                                                            allowfullscreen: E.fullscreen
                                                                                                                                                        }
                                                                                                                                                    });
                                                                                                                                                    r()
                                                                                                                                                } else {
                                                                                                                                                    if (I.match(/\#mb_/i)) {
                                                                                                                                                        j = "inline";
                                                                                                                                                        G = G || E.defaultWidth;
                                                                                                                                                        q = q || E.defaultHeight;
                                                                                                                                                        URLsplit = I.split("#");
                                                                                                                                                        v = document.id(URLsplit[1]).get("html");
                                                                                                                                                        r()
                                                                                                                                                    } else {
                                                                                                                                                        j = "url";
                                                                                                                                                        G = G || E.defaultWidth;
                                                                                                                                                        q = q || E.defaultHeight;
                                                                                                                                                        d = "mediaId_" + new Date().getTime();
                                                                                                                                                        v = new Element("iframe", {
                                                                                                                                                            src: I,
                                                                                                                                                            id: d,
                                                                                                                                                            width: G,
                                                                                                                                                            height: q,
                                                                                                                                                            frameborder: 0
                                                                                                                                                        });
                                                                                                                                                        r()
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    function r() {
        if (j == "img") {
            G = v.width;
            q = v.height;
            if (E.imgBackground) {
                k.setStyles({
                    backgroundImage: "url(" + I + ")",
                    display: ""
                })
            } else {
                if (q >= P - E.imgPadding && (q / P) >= (G / l)) {
                    q = P - E.imgPadding;
                    G = v.width = parseInt((q / v.height) * G);
                    v.height = q
                } else {
                    if (G >= l - E.imgPadding && (q / P) < (G / l)) {
                        G = l - E.imgPadding;
                        q = v.height = parseInt((G / v.width) * q);
                        v.width = G
                    }
                } if (Browser.Engine.trident) {
                    v = document.id(v)
                }
                v.addEvent("mousedown", function (ad) {
                    ad.stop()
                }).addEvent("contextmenu", function (ad) {
                    ad.stop()
                });
                k.setStyles({
                    backgroundImage: "none",
                    display: ""
                });
                v.inject(k)
            }
        } else {
            if (j == "obj") {
                if (Browser.Plugins.Flash.version < 7 && F == "false") {
                    k.setStyles({
                        backgroundImage: "none",
                        display: ""
                    });
                    k.set("html", '<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>');
                    G = E.DefaultWidth;
                    q = E.DefaultHeight
                } else {
                    if (Browser.Plugins.Flash.version < 10 && F == "true") {
                        k.setStyles({
                            backgroundImage: "none",
                            display: ""
                        });
                        k.set("html", '<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>');
                        G = E.DefaultWidth;
                        q = E.DefaultHeight
                    } else {
                        k.setStyles({
                            backgroundImage: "none",
                            display: ""
                        });
                        v.inject(k)
                    }
                }
            } else {
                if (j == "qt") {
                    k.setStyles({
                        backgroundImage: "none",
                        display: ""
                    });
                    v
                } else {
                    if (j == "inline") {
                        k.setStyles({
                            backgroundImage: "none",
                            display: ""
                        });
                        k.set("html", v)
                    } else {
                        if (j == "url") {
                            k.setStyles({
                                backgroundImage: "none",
                                display: ""
                            });
                            v.inject(k)
                        } else {
                            k.setStyles({
                                backgroundImage: "none",
                                display: ""
                            });
                            k.set("html", '<div id="mbError"><b>Error</b><br/>A file type error has occoured contact the webmaster for more information.</div>');
                            G = E.defaultWidth;
                            q = E.defaultHeight
                        }
                    }
                }
            }
        }
        k.setStyles({
            width: G,
            height: q
        });
        S.setStyles({
            width: G
        });
        D.setStyles({
            width: G
        });
        J.set("html", (E.showCaption) ? aa[0] : "");
        S.set("html", (E.showCaption && (aa.length > 1)) ? aa[1] : "");
        if (O == "true" || e == "true") {
            D.set("html", "<a href='/rights.html' id=/'mbRequestRR/'>License this image >></a>")
        } else {
            D.set("html", "")
        }
        ac.set("html", (E.showCounter && (i.length > 1)) ? E.counterText.replace(/{x}/, V + 1).replace(/{y}/, i.length) : "");
        if ((M >= 0) && (i[M][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))) {
            C.src = i[M][0].replace(/twitpic\.com/i, "twitpic.com/show/full")
        }
        if ((U >= 0) && (i[U][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))) {
            ab.src = i[U][0].replace(/twitpic\.com/i, "twitpic.com/show/full")
        }
        G = k.offsetWidth;
        q = k.offsetHeight + c.offsetHeight;
        if (q >= p + p) {
            K = -p
        } else {
            K = -(q / 2)
        } if (G >= m + m) {
            o = -m
        } else {
            o = -(G / 2)
        } if (E.resizeOpening) {
            B.resize.start({
                width: G,
                height: q,
                marginTop: K - n,
                marginLeft: o - n
            })
        } else {
            b.setStyles({
                width: G,
                height: q,
                marginTop: K - n,
                marginLeft: o - n
            });
            X()
        }
    }

    function X() {
        B.image.start(1)
    }

    function N() {
        b.className = "";
        if (M >= 0) {
            Z.style.display = ""
        }
        if (U >= 0) {
            f.style.display = ""
        }
        B.bottom.start(1);
        w()
    }

    function y() {
        if (v) {
            v.onload = $empty
        }
        B.resize.cancel();
        B.image.cancel().set(0);
        B.bottom.cancel().set(0);
        $$(Z, f).setStyle("display", "none")
    }

    function T() {
        if (V >= 0) {
            v.onload = $empty;
            k.set("html", "");
            for (var ad in B) {
                B[ad].cancel()
            }
            b.setStyle("display", "none");
            B.overlay.chain(u).start(0);
            w()
        }
        return false
    }

    function w() {
        F = "false";
        O = "false";
        e = "false"
    }
})();
Mediabox.scanPage = function () {
    var a = $$("a").filter(function (b) {
        return b.rel && b.rel.test(/^lightbox/i)
    });
    $$(a).mediabox({}, null, function (c) {
        var b = this.rel.replace(/[[]|]/gi, " ");
        var d = b.split(" ");
        return (this == c) || ((this.rel.length > 8) && c.rel.match(d[1]))
    })
};
window.addEvent("domready", Mediabox.scanPage);