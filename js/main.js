var nav = document.getElementById("nav");
var isMobile = false;
var hire_me = document.getElementById("hire_me");

var overlay = document.getElementById("overlay");
overlay.style.display = "none";
overlay2 = document.getElementById("overlay2");
var is_overlay = false;
overlay2.style.display = "none";
var windowWidth = window.innerWidth;

overlay.addEventListener("click", function(){
    isMobile = false;
    setMenu();
})
overlay2.addEventListener("click", toggleOverlay);
document.getElementById("close").addEventListener("click", toggleOverlay);

if(windowWidth <= 768){
    isMobile = false;
}
function toggleNav(){
  isMobile = !isMobile;

  setMenu();
}

function hireMe(){

    hire_me.style.display = "block";
    toggleOverlay(true);
}
function toggleOverlay(state) {

    if(state === true){
        overlay2.style.display = "block";
    }else if(state === false) {
        overlay2.style.display = "none"
        hire_me.style.display = "none";
    }else {
        overlay2.style.display = "none"
        hire_me.style.display = "none"
    }
}
function setMenu() {
    if(isMobile === true){
        nav.style.display = "block";
        overlay.style.display = "block"
    }else {
        nav.style.display = "none";
        overlay.style.display = "none";
    }
}