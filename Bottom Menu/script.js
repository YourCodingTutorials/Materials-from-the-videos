let prevScrollpos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bottomMenu").style.bottom = "0";
  } else {
    document.getElementById("bottomMenu").style.bottom = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
