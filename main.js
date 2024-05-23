var circle =document.querySelector(".circle");
var upBtn= document.querySelector(".up-btn");
var downBtn= document.querySelector(".down-btn");
var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function (){

    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum ;
    rotateValue = rotateSum ;
}
downBtn.onclick = function (){
        rotateSum = rotateValue + "rotate(+90deg)";
        circle.style.transform = rotateSum ;
        rotateValue = rotateSum ;
}
