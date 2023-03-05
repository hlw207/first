var Ishide1 = true;
var Ishide2 = true;
function hide1(){
    if(Ishide1){
        document.getElementById("button1").innerHTML = "keyboard_arrow_up";
        Ishide1 = false;
        document.getElementById("hide1").style.display = "block";
    }else{
        document.getElementById("button1").innerHTML = "keyboard_arrow_down";
        Ishide1 = true;
        document.getElementById("hide1").style.display = "none";
    }
}
function hide2(){
    if(Ishide2){
        document.getElementById("button2").innerHTML = "keyboard_arrow_up";
        Ishide2 = false;
        document.getElementById("hide2").style.display = "block";
    }else{
        document.getElementById("button2").innerHTML = "keyboard_arrow_down";
        Ishide2 = true;
        document.getElementById("hide2").style.display = "none";
    }
}