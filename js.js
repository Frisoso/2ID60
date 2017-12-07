
$( "html").hide().fadeIn(1000);
$( ".socialNetworkNav" ).hide().fadeIn(2000);

displayComments();

function submitComment() {
  var uname = $( "#uname" ).val();
  var ctext = $( "#ctext" ).val();

  var d = new Date();
  var cdate = d.toUTCString();

  var curComments = getCookie("comments");
  newComments = curComments + uname + "|" + ctext + "|" + cdate + ";"

  console.log(newComments);

  setCookie("comments", newComments);
}

function displayComments() {
  var comments = getCookie("comments");
  if ( !comments ) {
    comments = "Friso Buurman|Initial comment|Fri, 01 Dec 2017 11:57:03 GMT;"
  }

  $( ".commentSection ol li" ).remove();

  var commentsArray = comments.split(';');
  for(var i = 0; i < commentsArray.length - 1; i++) {
    commentArray = commentsArray[i].split('|');
    $( ".commentSection ol" ).append("<li><article class=\"comment\"><div class=\"entry-content\"><p>" + commentArray[1] + "</p></div><footer class=\"post-info\"><abbr class=\"published\" title=\"" + commentArray[2] + "\">" + commentArray[2] + "</abbr><address class=\"vcard author\">By <a class=\"url fn\" href=\"#\">" + commentArray[0] + "</a></address></footer></article></li>");
  }
}


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

//general cookie functions
function setCookie(cname, cvalue) {
    setCookie(cname, cvalue, 31);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
