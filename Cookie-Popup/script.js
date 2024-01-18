document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.indexOf("cookieAccepted=true") > -1) {
        document.getElementById('cookieContainer').style.display = 'none';
    }
});

function acceptCookie() {
    document.getElementById('cookieContainer').style.display = 'none';
    document.cookie = "cookieAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}
