//Time Show
var seconds =00;
var minutes=00;
var ShowMins=document.querySelector("#mins");
var ShowSecs=document.querySelector("#secs");
var ShowMoment=document.querySelector("#lap");

//Buttons
var StartBTN=document.querySelector("#start");
var StopBTN=document.querySelector("#stop");
var ResetBTN=document.querySelector("#reset");
var LapBTN=document.querySelector("#laps");

var interval;

//organizing the work of time
function startTimer(){
seconds++;
if(seconds<9){
    ShowSecs.innerHTML="0"+seconds;
    }
if(seconds>9){
        ShowSecs.innerHTML=seconds;   
    }
if(seconds>59){
    minutes++;
    ShowMins.innerHTML="0"+minutes;
    seconds=0;
    ShowSecs.innerHTML="0"+0;
}
if(minutes>9){
    ShowMins.innerHTML=minutes; 
}

}

StartBTN.onclick=function(){
    clearInterval(interval);
    interval=setInterval(startTimer,1000);
};

StopBTN.onclick=function(){
    clearInterval(interval);
};

ResetBTN.onclick=function(){
    clearInterval(interval);
    seconds="00";
    minutes="00";
    ShowMins.innerHTML=minutes;
    ShowSecs.innerHTML=seconds;
};

LapBTN.onclick=function(){
   if(seconds<9 && minutes<9 ){
    ShowMoment.innerHTML= "0"+minutes+ ":" + "0"+ seconds;
   }

   if(seconds>9 && minutes<9 ){
    ShowMoment.innerHTML= "0"+minutes+ ":" + seconds;
   }

   if(seconds>9 && minutes>9 ){
    ShowMoment.innerHTML= minutes+ ":" + seconds;
   }
};