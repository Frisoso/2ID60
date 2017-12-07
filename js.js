
$( "html").hide().fadeIn(1000);
$( ".socialNetworkNav" ).hide().fadeIn(2000);

//manage cookies
var cname = "useCookies";
if ( getCookie(cname) ) {
  removeCookieBar();
}

function removeCookieBar() {
  $( "#cookiebar" ).remove();
}

function cookieYes() {
  setCookie(cname, "true", 31);
  removeCookieBar();
}

function cookieNo() {
  setCookie(cname, "false", 31);
  removeCookieBar();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cname + "=" + cvalue + ";" + expires + ";path=/");

}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
