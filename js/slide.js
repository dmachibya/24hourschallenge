var slidesText = [
    "Web & Systems Design",
    "Android App Development",
    "Desktop App Development",
    "UI / UX",
    "Motion Graphics",
    "Branding & Identity",
    "IT Consultancy",
]

var elem = document.getElementById("slide_text");
var line_top = document.getElementById("line_top");
var line_bottom = document.getElementById("line_bottom");
var line = document.getElementById("line_top");
var slideTime = 5000;
var lineTime = 500;
var x = 0;
var position = false;
var number = 0;

var counter = setInterval(function(){
    elem.innerHTML = slidesText[number];

    number += 1;

    if(number >= slidesText.length){
        number = 0;
    }

    animateLines(number);
              
}, slideTime)

function animateLines(number){
    if(position === false){
        x = 50;
        line_top.style.cssText = "left: "+x+"%; background: #FF8C3D";
        line_bottom.style.cssText = "right: "+50+"%; background: #3DF2FF";
    }else 
    {
        x = 0;
        line_top.style.cssText = "left: "+x+"%; background: #3DF2FF";
        line_bottom.style.cssText = "right: "+x+"%; background: #FF8C3D";
    }
    position = !position;
}
