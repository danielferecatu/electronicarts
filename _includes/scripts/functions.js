function date() {
    function a(e) {
        if (e < 10) {
            e = "0" + e
        }
        return e;
    };
    var e = new Date,
        n = e.getFullYear(),
        r = e.getMonth() + 1,
        i = e.getDate(),
        s = e.getHours(),
        o = e.getMinutes(),
        u = e.getSeconds();

    t = setTimeout("date()", 500);
    document.getElementById("time").innerHTML = s + ":" + o + ":" + u + "<br>" + i + "." + r + "." + n;

    // dev
    $("#dev").text("Developer(s):");
    $("#edit").text("Editor(s):");
    $("#series").text("Series:");
    $("#ge").text("Graphic engine:")
}

function footer() {
    document.getElementById("footerscript").innerHTML = "<div id='footer_main_content'><div id='about'><h3>About</h3><a href='http://www.electronicarts.coffeecup.com'>Electronic Arts&trade;</a> is an American company that manufactures and markets video games for computers and game consoles. Most popular games from <a href='http://www.electronicarts.coffeecup.com'>Electronic Arts</a> portofolio are as <a href='http://electronicarts.coffeecup.com/series/fifa/index.html'>FIFA Soccer</a> sports simulators, with <a href='http://electronicarts.coffeecup.com/series/nfs/index.html'>Need for Speed</a>, <a href='http://electronicarts.coffeecup.com/series/medalofhonor/index.html'>Medal of Honor</a>, <a href='http://electronicarts.coffeecup.com/series/sims/index.html'>The Sims</a> and <a href='http://electronicarts.coffeecup.com/series/battlefield/index.html'>Battlefield</a>.</div><div id='links'><h3>Links</h3><nav><a href='http://electronicarts.coffeecup.com/series/battlefield/index.html'>Battlefield</a><a href='http://electronicarts.coffeecup.com/series/nfs/index.html'>Need&nbsp;for&nbsp;Speed</a><a href='http://electronicarts.coffeecup.com/series/burnout/index.html'>Burnout</a><a href='http://electronicarts.coffeecup.com/series/nba/index.html'>NBA&nbsp;Live</a><a href='http://electronicarts.coffeecup.com/series/masseffect/index.html'>Mass&nbsp;Effect</a></nav></div><div id='sitemap'><h3>Sitemap</h3><nav><a href='http://www.electronicarts.coffeecup.com/'>Home</a><a href='http://www.electronicarts.coffeecup.com/ea.html'>Electronic Arts</a><a href='http://www.electronicarts.coffeecup.com/sitemap.htm'>Sitemap</a><a href='http://www.electronicarts.coffeecup.com/contact.html'>Contact</a></nav></div></div><div id='prod'>Design&nbsp;created&nbsp;by&nbsp;<a href='https://plus.google.com/u/0/+DanVali657/posts'>Daniel&nbsp;Ferecatu</a>&nbsp;©&nbsp;2014</div>";
}

function menu() {
    document.getElementById("menu").innerHTML = '<ul><li><a href="http://www.electronicarts.coffeecup.com/">Home</a></li><li><a href="http://www.electronicarts.coffeecup.com/ea.html">Electronic Arts</a></li><li><a href="http://www.electronicarts.coffeecup.com/sitemap.htm">Site Map</a></li><li><a href="http://www.electronicarts.coffeecup.com/contact.html">Contact</a></li><li><a href="#page" class="go-top">Go Top</a></li></ul>';

    if (window.addEventListener) {
        window.addEventListener("scroll", handleScroll, false);
    } else {
        window.attachEvent("onscroll", handleScroll);
    }
}

function handleScroll() {
    "use strict";
    if (window.XMLHttpRequest) {
        var d = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
        document.getElementById("menu").className = d > 280 ? "fixed" : "";
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 280) {
            $(".go-top").fadeIn(200);
        } else {
            $(".go-top").fadeOut(0);
        }
    });
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}


// // Google Analystics

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-49308473-2', 'coffeecup.com');
// ga('send', 'pageview');

