var slidesText = [
    "Web & Systems Design",
    "Android App Development",
    "Desktop App Development",
    "UI / UX",
    "Motion Graphics",
    "Branding & Identity",
    "IT Consultancy",
    "And much more"
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

var numberCycle = [-1,0,0,0,0,0,0,0]

function resetCycle(){
    for(i = 0; i < numberCycle.length; i++){
        numberCycle[i] = 0;
    }
    numberCycle[0] = -1;
}
var loop = true;

function animateLines(r_number){
    //console.log(r_number, number);
  setInterval(function(){

    if(numberCycle[r_number] >= 2){
       loop = false;
       //numberCycle[r_number] = 0;
    }else {
        loop = true;
    } 
    
    if(r_number === 7){
        resetCycle();
    }
    console.log(r_number, numberCycle[r_number])

    action(r_number);

    }, lineTime)
}

function action(r_number){
    if(loop === true){
        console.log("here: "+slidesText[r_number]);
        position = !position;
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
    
    }else {
        console.log("stop");
    }
    numberCycle[r_number] += 1;
}